import { Component, inject } from '@angular/core';
import { ScreenComponent } from '../../shared/screen/screen.component';
import { NumpadComponent } from '../../shared/numpad/numpad.component';
import { ControlComponent } from '../../shared/control/control.component';
import { PostRequestService } from './post-request.service';
import { ListService } from '../../shared/ListService';
import { arrow_messages, decimal_messages, error_message, home_messages, ok_messages, on_off_messages, parenthesis_messages, return_messages, selectRandom, sent_message } from './dumb-sentences.data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ScreenComponent, NumpadComponent, ControlComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  private _snackBar = inject(MatSnackBar);
  title = 'FAKEWORKS';
  messages = [{ message: 'Welcome to FAKEWORKS!', type: "text" }, { message: 'Please enter a Calculation.', type: "text" }];
  currentMessage = '';
  currentIndex = 0;
  isSending = false;


  constructor(private postRequestService: PostRequestService, private listService: ListService) { }

  onKeyClickHandler({ value, type }: { value: string, type: string }) {
    if (this.isSending) {
      this._snackBar.open("Still sending last message", "", { duration: 1000 });
      return;
    }
    if (type === "calculation") {
      if (!/^\d*([\+\-\/x](\d*)?)?$/.test(this.currentMessage + value)) {
        this.messages.push({ message: "ERR : -> format int[+-x/]int", type: "error" });
      } else {
        this.currentMessage += value;
        this.currentIndex = this.currentMessage.length;
      }
    } else if (type === "exec" && this.currentMessage) {
      this.messages.push({ message: this.currentMessage, type: "calculation" });

      const calculation = this.currentMessage.replace(/x/g, '*');
      const calculationDisplay = this.currentMessage
      this.isSending = true;
      let intervalId = setInterval(() => {
        if (this.currentMessage.length < 3) this.currentMessage += ".";
        else this.currentMessage = "";
      }, 100);
      this.postRequestService.postRequest(calculation).pipe(
        finalize(() => {
          clearInterval(intervalId);
          this.currentMessage = "";
          this.isSending = false;
        }
        )
      ).subscribe({
        next: (data) => {
          this.messages.push({ message: selectRandom(sent_message), type: "text" });
          this.listService.addItem(calculationDisplay, data.id);
        },
        error: (_) => {
          this.messages.push({ message: selectRandom(error_message), type: "error" });
          this._snackBar.open("An error occured. Service down or network errror.", "Ok", { panelClass: ["error-snackbar"] });
        }
      });
      this.currentMessage = '';

    } else if (type === "delete") {
      this.currentMessage = this.currentMessage.slice(0, this.currentIndex - 1) + this.currentMessage.slice(this.currentIndex);
      this.currentIndex--;
    } else if (type === "clear") {
      this.currentMessage = '';
      this.currentIndex = 0;
    } else {
      let messages: string[] = [];
      if (type === "arrow") messages = arrow_messages;
      if (type === "home") messages = home_messages;
      if (type === "on_off") messages = on_off_messages;
      if (type === "return") messages = return_messages;
      if (type === "ok") messages = ok_messages;
      if (type === "parenthesis") messages = parenthesis_messages;
      if (type === "decimal") messages = decimal_messages;
      this.messages.push({ message: selectRandom(messages), type: "strange_text" });
    }
  }
}

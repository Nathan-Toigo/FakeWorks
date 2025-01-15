import { Component } from '@angular/core';
import { ScreenComponent } from '../../shared/screen/screen.component';
import { NumpadComponent } from '../../shared/numpad/numpad.component';
import { ControlComponent } from '../../shared/control/control.component';
import { PostRequest } from './post-request-interface';
import { PostRequestService } from './post-request.service';
import { ListService } from '../../shared/ListService';


const arrow_messages = [
  "Where do you think we go?",
  "Directionless, aren't we?",
  "Lost in the void, again.",
  "Arrows point to nowhere.",
  "No escape this way."
];
const home_messages = [
  "Nobody is going home.",
  "Home is just an illusion.",
  "No such place as 'home'.",
  "Stay where you belong.",
  "The door to home is gone."
];
const on_off_messages = [
  "Power's out—forever.",
  "Off is the new 'on'.",
  "Lights dim, hope fades.",
  "On? Not on my watch.",
  "Power? That's ambitious."
];
const return_messages = [
  "Mistakes linger forever.",
  "No undo button here.",
  "Returns are for the weak.",
  "The past is unchangeable.",
  "One way, no turning back."
];
const ok_messages = [
  "OK? That's debatable.",
  "Nothing's ever really OK.",
  "OK is just false hope.",
  "You think it's OK? Wrong.",
  "OK, but not for you."
];

const parenthesis_messages = [
  "Parentheses enclose despair.",
  "Inside these, nothing's safe.",
  "Syntax error—too open.",
  "Closed, but not forgotten.",
  "Parentheses trap the void."
];
const decimal_messages = [
  "Precision won't save you.",
  "A point of no return.",
  "Decimals divide us all.",
  "Small, but significant pain.",
  "Numbers never lie, but do."
];


@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ScreenComponent, NumpadComponent, ControlComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  title = 'FAKEWORKS';
  messages = [{ message: 'Welcome to FAKEWORKS!', type: "text" }, { message: 'Please enter a Calculation.', type: "text" }];
  currentMessage = '';
  currentIndex = 0;


  constructor(private postRequestService : PostRequestService, private listService: ListService) {} 

  onKeyClickHandler({ value, type }: { value: string, type: string }) {

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
      this.postRequestService.postRequest(calculation).subscribe({
            next: (data) => {
              this.listService.addItem(calculationDisplay, data.id);
              
              console.log(this.listService.getList());
            },
            error: (error) => {
              console.log(error);
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
      this.messages.push({ message: messages[Math.floor(Math.random() * messages.length)], type: "strange_text" });
    }
  }
}

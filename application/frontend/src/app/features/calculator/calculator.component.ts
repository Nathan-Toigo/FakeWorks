import { Component } from '@angular/core';
import { ScreenComponent } from '../../shared/screen/screen.component';
import { NumpadComponent } from '../../shared/numpad/numpad.component';
import { ControlComponent } from '../../shared/control/control.component';

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

  onKeyClickHandler({ value, type }: { value: string, type: string }) {
    if (type === "calculation") {
      this.currentMessage += value;
      this.currentIndex = this.currentMessage.length;
    } else if (type === "exec" && this.currentMessage) {
      this.messages.push({ message: this.currentMessage, type: "calculation" });
      this.currentMessage = '';
    } else if (type === "delete") {
      this.currentMessage = this.currentMessage.slice(0, this.currentIndex - 1) + this.currentMessage.slice(this.currentIndex);
      this.currentIndex--;
    }
  }
}

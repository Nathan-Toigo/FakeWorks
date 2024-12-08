import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-numpad',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './numpad.component.html',
  styleUrl: './numpad.component.scss'
})
export class NumpadComponent {
  @Output() onKeyClick = new EventEmitter<{ value: string, type: string }>();
  keys = [
    { value: "7", type: 'calculation' },
    { value: "8", type: 'calculation' },
    { value: "9", type: 'calculation' },
    { value: "(", type: 'calculation' },
    { value: ")", type: 'calculation' },
    { value: "4", type: 'calculation' },
    { value: "5", type: 'calculation' },
    { value: "6", type: 'calculation' },
    { value: "x", type: 'calculation' },
    { value: "/", type: 'calculation' },
    { value: "1", type: 'calculation' },
    { value: "2", type: 'calculation' },
    { value: "3", type: 'calculation' },
    { value: "+", type: 'calculation' },
    { value: "-", type: 'calculation' },
    { value: "0", type: 'calculation' },
    { value: '.', type: 'calculation' },
    { value: 'CLR', type: 'clear' },
    { value: 'DEL', type: 'delete' },
    { value: 'EXE', type: 'exec' }
  ]

  onKeyClickHandler(value: string) {
    this.onKeyClick.emit(this.keys.find(key => key.value === value));
  }

}

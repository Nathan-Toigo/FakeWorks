import { Component } from '@angular/core';

@Component({
  selector: 'app-numpad',
  standalone: true,
  imports: [],
  templateUrl: './numpad.component.html',
  styleUrl: './numpad.component.scss'
})
export class NumpadComponent {
  keys = [
    { value: "7", type: 'number' },
    { value: "8", type: 'number' },
    { value: "9", type: 'number' },
    { value: "(", type: 'parenthesis' },
    { value: ")", type: 'parenthesis' },
    { value: "4", type: 'number' },
    { value: "5", type: 'number' },
    { value: "6", type: 'number' },
    { value: "x", type: 'operator' },
    { value: "/", type: 'operator' },
    { value: "1", type: 'number' },
    { value: "2", type: 'number' },
    { value: "3", type: 'number' },
    { value: "+", type: 'operator' },
    { value: "-", type: 'operator' },
    { value: "0", type: 'number' },
    { value: '.', type: 'decimal' },
    { value: '', type: 'null' },
    { value: '', type: 'null' },
    { value: 'EXE', type: 'exec' }
  ]

}

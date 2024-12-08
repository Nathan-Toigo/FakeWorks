import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() isSpace: boolean = false;
  @Input() isRound: boolean = false;
  @Input() bgColor: string = "#E9E9E9";

}

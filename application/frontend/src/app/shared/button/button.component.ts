import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() value: string = "";
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();
  @Input() isSpace: boolean = false;
  @Input() isRound: boolean = false;
  @Input() bgColor: string = "#E9E9E9";

  onClickHandler() {
    this.onClick.emit(this.value);
  }
}

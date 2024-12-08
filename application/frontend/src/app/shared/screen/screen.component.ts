import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.scss'
})
export class ScreenComponent {
  @Input() messages: { message: string, type: string }[] = [];
  @Input() currentMessageIndex: number = 0;
  @Input() currentMessage: string = '';
  @Output() onMessageChange: Function = () => { };
}

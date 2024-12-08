import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss'
})
export class ControlComponent {
  @Output() onKeyClick = new EventEmitter<{ value: string, type: string }>();
  keys = {
    ARROW_LEFT : { value: 'CLR', type: 'arrow' },
    ARROW_RIGHT : { value: 'DEL', type: 'arrow' },
    ARROW_UP : { value: 'EXE', type: 'arrow' },
    ARROW_DOWN : { value: 'EXE', type: 'arrow' },
    HOME : { value: 'HOME', type: 'home' },
    ON_OFF : { value: 'ON_OFF', type: 'on_off' },
    OK : { value: 'ok', type: 'ok' },
    RETURN : { value: 'return', type: 'return' }
  }


  onKeyClickHandler(value: { value: string, type: string }) {
    this.onKeyClick.emit(value);
  }
}

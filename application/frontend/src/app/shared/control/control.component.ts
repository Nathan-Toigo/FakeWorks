import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss'
})
export class ControlComponent {

}

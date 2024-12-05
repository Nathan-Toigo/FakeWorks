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

}

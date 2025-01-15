import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './features/calculator/calculator.component';
import { RequestListComponent } from './features/requestList/requestList.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalculatorComponent, RequestListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}

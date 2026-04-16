import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Applications } from './components/applications/applications';
import { Register } from './components/register/register';
import { Details } from './components/details/details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Applications, Register, Details],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('job-application-tracker');
}

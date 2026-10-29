import { Component } from '@angular/core';
import { EnvInfoComponent } from './components/env-info/env-info';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EnvInfoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'practica-despliegues';
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-env-info',
  standalone: true,
  templateUrl: './env-info.html',
  styleUrl: './env-info.css'
})
export class EnvInfoComponent {
  appName = 'Práctica de Despliegues';
  welcome = 'Bienvenido a la aplicación';
  environment = 'Entorno de pruebas QA';
}
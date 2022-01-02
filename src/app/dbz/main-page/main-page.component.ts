import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [],
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'krilin',
      poder: 700,
    },
    {
      nombre: 'GOKU',
      poder: 15000,
    },
    {
      nombre: 'VeGeTa',
      poder: 8999,
    },
  ];

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
  }
}

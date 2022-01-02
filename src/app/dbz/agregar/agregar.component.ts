import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent {
  @Input
  () personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregar(): void {
    // validar que el string no este vacio
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // validar que el numero no sea negativo
    if (this.nuevo.poder < 0) {
      return;
    }

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };

    console.log(this.nuevo, 'usando ngSubmit, buena crack');
  }
}

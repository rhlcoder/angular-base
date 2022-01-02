import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {
    // validar que el string no este vacio
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // validar que el numero no sea negativo
    if (this.nuevo.poder < 0) {
      return;
    }

    this.nuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}

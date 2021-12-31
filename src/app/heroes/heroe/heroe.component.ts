import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  titulo: string = '02 Heroe component';
  nombre: string = 'Ironman';
  edad: number = 34;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombreYEdad(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman'
  }

  cambiarEdad(): void{
    this.edad= 145
  }
}

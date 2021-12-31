import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>01 Bases</h1>

    <h1>{{ titulo }}</h1>

    <h3>La base es {{ base }}</h3>

    <button (click)="acumular(base)">&plus; {{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(-base)">&minus; {{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number):void {
    this.numero += valor;
  }
}

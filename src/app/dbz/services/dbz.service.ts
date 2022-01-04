import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
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

  get personajes():Personaje[] {
    return [...this._personajes] // se usa el spread operator para que no se pase la referencia, sino un arreglo nuevo
  }

  constructor() {
    console.log('Servicio inicializado');
  }
}

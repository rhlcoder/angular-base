import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  /* @Input() personajes: Personaje[] = []; */ // me traigo la propiedad personajes, desde main-page.component.ts (el componente padre) YA NO ES NECESARIO PORQUE LA DATA ESTA EN EL SERVICE

  public get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {}
}

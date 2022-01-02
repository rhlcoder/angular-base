import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  @Input() personajes: Personaje[] = []; // me traigo la propiedad personajes, desde main-page.component.ts (el componente padre)
}

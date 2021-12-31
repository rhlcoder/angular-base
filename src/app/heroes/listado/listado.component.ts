import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  titulo: string = '03 Structural Directives';

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Hijitus'];
  heroesBorrados: string[] = [];

  borrarUltimoHeroe() {
    let borrado: string;
    if (this.heroes.length > 0) {
      borrado = this.heroes.pop() ?? '';
      this.heroesBorrados.push(borrado);
    }
  }

  borrarPrimerHeroe() {
    let borrado: string;
    if (this.heroes.length > 0) {
      borrado = this.heroes.shift() ?? '';
      this.heroesBorrados.push(borrado);
    }
  }

  reset(): void {
    this.heroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Hijitus'];
    this.heroesBorrados = [];
  }
}

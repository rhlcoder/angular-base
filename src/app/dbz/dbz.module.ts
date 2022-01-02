import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';



@NgModule({
  declarations: [MainPageComponent, PersonajesComponent],
  imports: [CommonModule, FormsModule], // importo el forms para hacer magia con los forms. Tambien esta el reactivo, pero es mas avanzado
  exports: [MainPageComponent],
})
export class DbzModule {}

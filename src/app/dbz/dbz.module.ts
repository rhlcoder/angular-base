import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, FormsModule], // importo el forms para hacer magia con los forms. Tambien esta el reactivo, pero es mas avanzado
  exports: [MainPageComponent],
})
export class DbzModule {}

import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [ContadorComponent],
  exports: [ContadorComponent],
  imports: [], // No importo CommonModule porque no usare ngFor, ngIf, etc
})
export class ContadorModule {}


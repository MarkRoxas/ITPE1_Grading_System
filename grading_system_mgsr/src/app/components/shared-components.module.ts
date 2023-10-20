import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    ButtonComponent,
  ]
})
export class SharedComponentsModule { }

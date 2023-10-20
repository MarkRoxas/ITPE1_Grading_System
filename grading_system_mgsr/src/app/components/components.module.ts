import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TableComponent,
  ] 
})
export class ComponentsModule { }

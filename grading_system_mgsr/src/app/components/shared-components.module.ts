import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { TeachersComponent } from '../layout/teachers/teachers.component';
import { StudentsComponent } from '../layout/students/students.component';



@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    TeachersComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    ButtonComponent,
    TeachersComponent,
    StudentsComponent
  ]
})
export class SharedComponentsModule { }

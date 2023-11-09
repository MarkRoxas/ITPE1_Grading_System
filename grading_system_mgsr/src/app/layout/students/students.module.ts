import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { StudentsComponent } from './students.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedComponentsModule
  ]
})
export class StudentsModule { }

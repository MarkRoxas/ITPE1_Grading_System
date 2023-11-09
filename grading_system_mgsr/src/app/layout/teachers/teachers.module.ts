import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersRoutingModule } from './teachers-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { TeachersComponent } from './teachers.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedComponentsModule
  ]
})
export class TeachersModule { }

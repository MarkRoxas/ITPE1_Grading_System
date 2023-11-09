import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ScreenComponent } from '../components/screen/screen.component';
import { StudentsComponent } from './students/students.component';
import { LayoutComponent } from './layout.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonComponent } from '../components/button/button.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ScreenComponent,
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ComponentsModule
  ]
})
export class LayoutModule { }

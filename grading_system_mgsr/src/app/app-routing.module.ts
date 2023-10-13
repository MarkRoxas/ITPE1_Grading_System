import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path:"",
    loadChildren: ()=>import('./layout/layout.module').then(mod=>mod.LayoutModule)
  },
  {
    path:"",
    loadChildren: ()=>import('./login/login.module').then(mod=>mod.LoginModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

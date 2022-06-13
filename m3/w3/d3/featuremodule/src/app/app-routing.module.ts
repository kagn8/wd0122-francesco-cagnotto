import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSportComponent } from './sports/lista-sport/lista-sport.component';
import { SportPageComponent } from './sports/sport-page.page';
import { SportComponent } from './sports/sport/sport.component';

const routes: Routes = [{
  path: 'sports',
  component:SportPageComponent,
  children:[
    {
    path:'',
    component:ListaSportComponent
    }
    // {
    // path:'',
    // component:SportComponent
    // }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

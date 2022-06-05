import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagine/home/home.component';
import { PostAttiviComponent } from './pagine/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './pagine/post-inattivi/post-inattivi.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active-post',
    component: PostAttiviComponent
  },
  {
    path: 'inactive-post',
    component: PostInattiviComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

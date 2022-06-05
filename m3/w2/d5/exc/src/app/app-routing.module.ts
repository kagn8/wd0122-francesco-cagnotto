import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiComponent } from './pages/completati/completati.component';
import { HomeComponent } from './pages/home/home.component';
import { IncompletiComponent } from './pages/incompleti/incompleti.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'app-completati',
    component: CompletatiComponent
  },
  {
    path: 'app-incompleti',
    component: IncompletiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

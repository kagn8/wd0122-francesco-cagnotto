import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CompletatiComponent } from './pages/completati/completati.component';
import { NavComponent } from './comp/nav/nav.component';
import { IncompletiComponent } from './pages/incompleti/incompleti.component';
import { ListComponent } from './comp/list/list.component';
import { FormsModule, NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompletatiComponent,
    NavComponent,
    IncompletiComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
   
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

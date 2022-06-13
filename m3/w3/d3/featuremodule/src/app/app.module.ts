import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportPageComponent } from './sports/sport-page.page';
import { NavComponent } from './comp/nav/nav.component';
import { ListaSportComponent } from './sports/lista-sport/lista-sport.component';
import { SportComponent } from './sports/sport/sport.component';

@NgModule({
  declarations: [
    AppComponent,
    SportPageComponent,
    NavComponent,
    ListaSportComponent,
    SportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

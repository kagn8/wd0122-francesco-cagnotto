import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostAttiviComponent } from './pagine/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './pagine/post-inattivi/post-inattivi.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { HomeComponent } from './pagine/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

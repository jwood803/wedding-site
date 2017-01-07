import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistryComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

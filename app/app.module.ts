import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeddingComponent }  from './wedding/wedding.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ WeddingComponent, RsvpComponent, RegistryComponent ],
  bootstrap:    [ WeddingComponent ],
})
export class AppModule { }
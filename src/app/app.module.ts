import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistryComponent } from './registry/registry.component';
import { LocationComponent } from './location/location.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RsvpService } from './rsvp/rsvp.service';
import { routing } from './app.routing';
import { PhotosComponent } from './photos/photos.component';
import { AccommodationsComponent } from "./accommodations/accommodations.component";
import { OutAndAboutComponent } from "./outAndAbout/outAndAbout.component";

export const firebaseConfig = {
  apiKey: "AIzaSyB2joa4kZf8ftWbLCsBtHsmdsaVe021T58",
  authDomain: "wedding-1483790611518.firebaseapp.com",
  databaseURL: "https://wedding-1483790611518.firebaseio.com",
  storageBucket: "wedding-1483790611518.appspot.com",
  messagingSenderId: "880711324362"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistryComponent,
    RsvpComponent,
    PhotosComponent,
    LocationComponent,
    AccommodationsComponent,
    OutAndAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    routing
  ],
  providers: [RsvpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

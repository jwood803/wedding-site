import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { routing } from './app.routing';

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
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

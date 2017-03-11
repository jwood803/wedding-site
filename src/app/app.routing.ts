import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';
import { PhotosComponent } from './photos/photos.component';
import {LocationComponent} from "./location/location.component";

const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
  {
    path: 'rsvp',
    component: RsvpComponent
  },
  {
    path: 'registry',
    component: RegistryComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

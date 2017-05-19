import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';
import { PhotosComponent } from './photos/photos.component';
import { LocationComponent } from "./location/location.component";
import { AccommodationsComponent } from "./accommodations/accommodations.component";
import { OutAndAboutComponent } from "./outAndAbout/outAndAbout.component";

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
  },
  {
    path: 'accommodations',
    component: AccommodationsComponent
  },
  {
    path: 'out',
    component: OutAndAboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

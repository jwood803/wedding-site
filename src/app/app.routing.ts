import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
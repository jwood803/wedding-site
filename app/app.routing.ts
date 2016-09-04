import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingComponent } from './wedding/wedding.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';

const appRoutes: Routes = [
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
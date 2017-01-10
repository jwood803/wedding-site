import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  templateUrl: './registry.component.html'
})
export class RegistryComponent { 
  isProdMode: boolean;

  constructor() {
    this.isProdMode = environment.production;
  }
}
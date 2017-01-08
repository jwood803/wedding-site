import { Component } from '@angular/core';
import { RsvpService } from './rsvp.service';

@Component({
  templateUrl: `./rsvp.component.html`
})
export class RsvpComponent {
  rsvps: any;

  constructor(private rsvpService: RsvpService) {
    this.rsvps = this.rsvpService.getData();
  }  
}
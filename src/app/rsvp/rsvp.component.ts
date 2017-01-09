import { Component } from '@angular/core';
import { RsvpService } from './rsvp.service';
import { AngularFire } from 'angularfire2';

@Component({
  templateUrl: `./rsvp.component.html`
})
export class RsvpComponent {
  rsvps: any;
  inviteStatus: string;
  guestType: string;
  isGuestBringingDate: boolean;

  constructor(private rsvpService: RsvpService, private angularFire: AngularFire) {
    this.rsvps = this.angularFire.database.list('/rsvps');
    this.inviteStatus = "going";
    this.guestType = "self";
  }

  onGuestTypeChange(value) {
    if(this.guestType === "selfPlusDate") {
      this.isGuestBringingDate = true;
    }
  }
  
  onSubmit(form) {
    console.log(form);

    this.rsvpService.postRsvp(form)
      .subscribe(data => console.log(data));
  }
}
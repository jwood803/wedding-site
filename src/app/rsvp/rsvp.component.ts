import { Component } from '@angular/core';
import { RsvpService } from './rsvp.service';

@Component({
  templateUrl: `./rsvp.component.html`
})
export class RsvpComponent {
  rsvps: any;
  inviteStatus: string;
  guestType: string;
  isGuestBringingDate: boolean;

  constructor(private rsvpService: RsvpService) {
    this.inviteStatus = "going";
    this.guestType = "self";
  }

  onGuestTypeChange(value) {
    console.log("Guest type changed");
    console.log(value);

    if(value === "selfPlusDate") {
      this.isGuestBringingDate = true;
    }
  }

  onInviteStatusChange(value) {
    console.log("Status changed");
    console.log(value);
  }

  onSubmit(form) {
    console.log(form);
  }
}
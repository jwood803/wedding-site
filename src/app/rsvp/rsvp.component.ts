import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { RsvpService } from './rsvp.service';

@Component({
  templateUrl: `./rsvp.component.html`
})
export class RsvpComponent {
  rsvps: any;
  inviteStatus: string;
  guestType: string;
  isGuestBringingOneDate: boolean;

  constructor(private rsvpService: RsvpService, private notificationService: NotificationsService) {
    this.inviteStatus = "going";
    this.guestType = "self";
  }

  onGuestTypeChange(value) {
    if(value === "self") {
      this.isGuestBringingOneDate = false;
    }

    if(value === "selfPlusOne") {
      this.isGuestBringingOneDate = true;
    }

    if(value === "selfPlusTwo") {
      this.isGuestBringingOneDate = false;
    }
  }

  onSubmit(form) {
    let successMessage = "Your RSVP has been sent! Can't wait to see you there!";

    if(form.inviteStatus !== "going") {
      successMessage = "Sorry you can't make it :(";
    }

    this.rsvpService.postRsvp(form)
      .subscribe(
        data => console.log(data),
        err => this.notificationService.error("Oh, no!", "Your RSVP didn't make it :( Please try again."),
        () => this.notificationService.success("RSVP Sent!", successMessage)
      );
  }
}

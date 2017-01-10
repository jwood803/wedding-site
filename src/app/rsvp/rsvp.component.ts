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
  isGuestBringingTwoDates: boolean;

  public notificationOptions = {
        timeOut: 3000,
        lastOnBottom: false,
        clickToClose: true,
        maxLength: 0,
        maxStack: 2,
        showProgressBar: false,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: 'visible',
        rtl: false,
        animate: 'scale',
        position: ['right', 'top']
    };

  constructor(private rsvpService: RsvpService, private notificationService: NotificationsService) {
    this.inviteStatus = "going";
    this.guestType = "self";
  }

  onGuestTypeChange(value) {
    if(value === "self") {
      this.isGuestBringingOneDate = false;
      this.isGuestBringingTwoDates = false;
    }

    if(value === "selfPlusOne") {
      this.isGuestBringingOneDate = true;
      this.isGuestBringingTwoDates = false;
    }

    if(value === "selfPlusTwo") {
      this.isGuestBringingTwoDates = true;
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
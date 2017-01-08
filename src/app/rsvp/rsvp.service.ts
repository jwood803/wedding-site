import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class RsvpService {
  private af: AngularFire;

  constructor(private angularFire: AngularFire) { 
    this.af = angularFire;
  }

  getData() {
    return this.af.database.list("rsvps");
  }
}

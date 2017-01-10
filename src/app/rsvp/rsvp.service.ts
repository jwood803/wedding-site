import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RsvpService {
  private firebaseUrl = "https://wedding-1483790611518.firebaseio.com/";

  constructor(private http: Http) { }

  postRsvp(rsvp) {
    let now = new Date();

    rsvp.createdDate = now.toLocaleString();


    const body = JSON.stringify(rsvp);
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post(this.firebaseUrl + "rsvps.json", body, { headers: headers })
      .map((resp: Response) => resp.json());
  }
}

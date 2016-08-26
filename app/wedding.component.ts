import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'wedding-app',
  templateUrl: `app.component.html`,
  styles: ['#body { text-align: center; }']
})
export class WeddingComponent { 
    names = "Jonathan & Janah";
}
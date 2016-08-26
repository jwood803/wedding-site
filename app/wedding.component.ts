import { Component } from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'wedding-app',
  templateUrl: `app.component.html`,
  styles: ['#body { text-align: center; }'],
  directives: [CollapseDirective]
})
export class WeddingComponent { 
    names = "Jonathan & Janah";
}
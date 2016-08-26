import { Component } from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'wedding-app',
  directives: [CollapseDirective],
  templateUrl: `app.component.html`,
  styles: ['#body { text-align: center; }']
})
export class WeddingComponent { 
    names: string = "Jonathan & Janah";
    isCollapsed: boolean = false;
}
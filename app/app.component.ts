import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Wedding site</h1>
            <p>Congraulations {{names}}</p>`
})
export class AppComponent { 
    names = "Jon and Janah";
}
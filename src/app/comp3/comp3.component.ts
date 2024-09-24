import { Component } from '@angular/core';

@Component({
  selector: 'custom-comp3',
  //templateUrl: './comp3.component.html',
  template: `<div>
    <h1>Inline Heading</h1>
    </div>`,
  //styleUrl: './comp3.component.css'
  styles: [`
    div{
      color:blue;
    }
    `]
})
export class Comp3Component {

}

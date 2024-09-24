import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

   private name: string = 'Suresh';

   isDisable:boolean = true;

   myClasses =['success', 'height50'];

   textid:string = 'inputId2';

  getName():string{
    return this.name + ' is a Trainer';
  }

  employees = ['Jack', 'Jill', 'Bob'];

  employee ={
    title: 'Software Engineer',
    name: 'Ghosh',
    salary: '10000000',
    src: 'https://images.unsplash.com/photo-1714464703034-f74ec8163fc2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Profile Pic'
  }

  clickSave():void{
    //this.name ="Saved Successfully";
    alert('Button Clicked');
  }

  mouseOverDone():void{
    alert('Mouse Over');
  }

  txtChange() {
    alert('text changed');
    }
}

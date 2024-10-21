import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Task3Component } from '../task3/task3.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,Task3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping';
  val:any;
   x:any;
  fun(){
    const el= document.getElementById('nam') as HTMLInputElement
  this.val=el.value;
  //alert(this.val);

  }
  name!:string;
  em!:string;
  pass!:string;
  show(){
if(this.pass!='Avinash'){
  alert("incorrect Password")
}
    alert(`Login Successful:: ${this.em} \n ${this.pass}`);
  }
}

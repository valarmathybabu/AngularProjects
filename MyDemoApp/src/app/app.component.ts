import { Component } from '@angular/core';
import {Todo} from './Todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My test demo app';
 taskvalue;
 tasklist : Todo[];

 ngOnInit()
 {
   this.taskvalue="";
   this.tasklist=[];
 }

 addItem()
 {
   if(this.taskvalue!=""){
     const newItem:Todo ={
       id:Date.now(),
       taskvalue: this.taskvalue,
       isDone:false
     };
     this.tasklist.push(newItem);
     this.taskvalue="";

   }
 }

 deleteItem(id:number)
 {
   this.tasklist = this.tasklist.filter(item=>item.id!=id);
 }
  
}

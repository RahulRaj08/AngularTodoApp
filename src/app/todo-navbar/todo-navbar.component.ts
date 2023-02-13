import { Component } from '@angular/core';
import { TodoHomeComponent } from '../todo-home/todo-home.component';
// import { TodoInboxComponent } from '../todo-inbox/todo-inbox.component';

@Component({
  selector: 'app-todo-navbar',
  templateUrl: './todo-navbar.component.html',
  styleUrls: ['./todo-navbar.component.css']
})
export class TodoNavbarComponent {

  constructor(private hme: TodoHomeComponent) {

  }

  toggle(){
    this.hme.open()
    
  }
  

}

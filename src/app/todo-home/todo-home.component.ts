import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent {
  opened = true

  open(){
    this.opened =! this.opened
    console.log('toggled home');
    console.log(this.opened);
    
    
  }

}

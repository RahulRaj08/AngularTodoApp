import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TaskService } from 'services/task.service';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent implements OnInit {
  lists: any
  constructor(private taskService:TaskService) {}
  ngOnInit(){

    this.taskService.getLists().subscribe((lists: any)=>{
      // console.log(lists);
      this.lists=lists
      

    })

    // this.taskService.getLists().subscribe((lists:any) => {   //returns all list and stores in an array
    //   this.lists=lists
      

    // })
    
  }
  opened = true

  

  open(){
    this.opened =! this.opened
    console.log('toggled home');
    console.log(this.opened);
    
    
  }

  

  

}

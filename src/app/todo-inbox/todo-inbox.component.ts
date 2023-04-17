

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'services/task.service';
import { Task } from '../models/task.model';
// import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-todo-inbox',
  templateUrl: './todo-inbox.component.html',
  styleUrls: ['./todo-inbox.component.css']
})
export class TodoInboxComponent implements OnInit {
  tasks: any
  constructor(private taskService: TaskService, private route: ActivatedRoute){}
  ngOnInit() {
  
    this.route.params.subscribe((params: Params)=>{

      if (params && params['listId']) {
        this.taskService.getTasks(params['listId']).subscribe((tasks: any) => {
          this.tasks = tasks;
        });
      } 
      else {
        this.tasks = undefined
      }
      
      
      // console.log('params: ',params);

        // this.taskService.getTasks(params['listId']).subscribe((tasks:any) =>{
        //   // console.log(tasks);
        //   this.tasks=tasks
          
        // })
      

    })

  
    
  }

  onTaskClick(task: Task){
    this.taskService.complete(task).subscribe(()=>{
      console.log('completed successfully');
      task.completed=!task.completed
      
    })

    //to set task to completed on click
  }
  
  
}

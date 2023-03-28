

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'services/task.service';
// import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-todo-inbox',
  templateUrl: './todo-inbox.component.html',
  styleUrls: ['./todo-inbox.component.css']
})
export class TodoInboxComponent implements OnInit {
  tasks:any
  constructor(private taskService: TaskService, private route: ActivatedRoute){}
  ngOnInit() {
  
    this.route.params.subscribe((params: Params)=>{
      
      
      console.log('params: ',params);

        this.taskService.getTasks(params['listId']).subscribe((tasks:any) =>{
          // console.log(tasks);
          this.tasks=tasks
          
        })
      

    })

  
    
  }
  
  
}

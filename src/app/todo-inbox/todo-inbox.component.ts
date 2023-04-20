

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  selectedListId: any
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router){}
  ngOnInit() {
  
    this.route.params.subscribe((params: Params)=>{

      if (params && params['listId']) {
        this.selectedListId = params['listId']
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
  

  onClickAddButton(){
    const currentPath = this.route.snapshot.url.join('/');
    if(currentPath === 'lists'){
      // console.log('no list id');
      alert('Please select a list')
      
    }else{
      // console.log(currentPath);
      this.router.navigateByUrl(`${currentPath}/newTask`)
      
    }
    

  }


  onDeleteListClick(){
    this.taskService.deleteList(this.selectedListId).subscribe((res:any) => {
      this.router.navigateByUrl('/lists')
    
      console.log(res);

      this.taskService.listDeleted.emit()


      
     
    })
  }

  onDeleteTaskClick(id:string){
    this.taskService.deleteTask(this.selectedListId,id).subscribe((res) => {
      this.tasks = this.tasks.filter((val: { _id: string; }) => val._id !== id)
      console.log(res);
      
    })

  }
  
}

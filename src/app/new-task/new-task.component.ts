import { Component } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { TaskService } from 'services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router){}
  listId: any
  currentPath = this.route.snapshot.url.join('/');
  ngOnInit(){
    this.route.params.subscribe((params: Params)=>{
      this.listId= params['listId']
      // console.log(this.listId);
      
      
      
    })
  }

  createTask(title: string){

    
    this.taskService.createTask(title,this.listId).subscribe((newTask:any)=>{
      console.log(newTask);
      this.router.navigate(['../'], {relativeTo: this.route})
      
    })
    

  }

}

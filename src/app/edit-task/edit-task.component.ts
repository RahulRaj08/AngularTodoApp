import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TaskService } from 'services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskId: any
  listId: any

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {


    this.route.params.subscribe((params: Params)=>{
      this.taskId=params['taskId'];
      this.listId=params['listId'];
      

    })

    
}


  updateTask(title:string){

    this.taskService.updateTask(this.listId,this.taskId,title).subscribe(() => {
      this.router.navigate(['/lists',this.listId])
      this.taskService.listUpdated.emit()
    })

  }


}

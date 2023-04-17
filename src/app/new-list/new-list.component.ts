import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'services/task.service';
import { List } from '../models/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent {

  constructor( private taskService:TaskService, private router: Router ){}

  createList(title:string){
    this.taskService.createList(title).subscribe((list:List)=>{   // type is List since using any is bad practice
      console.log(list);
      //After creating list, we navigate to /lists/response._id 
      // this.router.navigate(['/lists',response._id])
      this.router.navigateByUrl(`/lists/${list._id}`)

      this.taskService.newListCreated.emit()//emit the event 
    })

  }
  

}

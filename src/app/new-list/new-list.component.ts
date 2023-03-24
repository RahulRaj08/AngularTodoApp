import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'services/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent {

  constructor( private taskService:TaskService, private router: Router ){}

  createList(title:string){
    this.taskService.createList(title).subscribe((response:any)=>{   //subscribe is used because post request is being returned
      console.log(response);
      //After creating list, we navigate to /lists/response._id 
      // this.router.navigate(['/lists',response._id])
      this.router.navigateByUrl(`/lists/${response._id}`)
    })

  }
  

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'services/task.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  listId: any;
  tasks: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {


    this.route.params.subscribe((params: Params)=>{
      this.listId=params['listId']
      

    })

    
}


  updateList(title:string){

    this.taskService.updateList(this.listId,title).subscribe(() => {
      this.router.navigate(['/lists',this.listId])
      this.taskService.listUpdated.emit()
    })

  }


}
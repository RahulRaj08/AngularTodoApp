import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TaskService } from 'services/task.service';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent implements OnInit {
  lists: any
  newListCreatedSubscription: any;
  listDeletedSubscription: any;
  listUpdatedSubscription: any;

  constructor(private taskService:TaskService, private router: Router) {}
  ngOnInit(){

    this.taskService.getLists().subscribe((lists: any)=>{
      // console.log(lists);
      this.lists=lists
      // this.router.navigateByUrl(`/lists/${lists[0]._id}`)

      

    })

    this.newListCreatedSubscription = this.taskService.newListCreated.subscribe(()=>{
      this.taskService.getLists().subscribe((lists:any)=>{
        this.lists=lists

      })
    })

    this.listDeletedSubscription = this.taskService.listDeleted.subscribe(() => {
      this.taskService.getLists().subscribe((lists:any)=>{
        this.lists=lists

      })
    })

    this.listUpdatedSubscription = this.taskService.listUpdated.subscribe(() => {
      this.taskService.getLists().subscribe((lists:any) =>{
        this.lists=lists
      })
    })

    

    
    
  }

  ngOnDestroy(){
    this.newListCreatedSubscription.unsubscribe()
    this.listDeletedSubscription.unsubscribe()
    this,this.listUpdatedSubscription.unsubscribe()
  }
  opened = true

  

  open(){
    this.opened =! this.opened
    console.log('toggled home');
    console.log(this.opened);
    
    
  }

  

  

}

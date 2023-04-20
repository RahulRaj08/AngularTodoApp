import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  getLists(){
    return this.webReqService.get('lists')
  }

  createList(title:string): Observable<List>{   // should give 'Observable<List>' since it is returning of type 'list' and not 'object'

    //send request to create a new list
    return this.webReqService.post('lists',{title}).pipe(  // pipe is used to transform Observable<Object> returned by post into an Observable<List>
      map((response:any)=>{  //The map operator is used to map the response object to a List object, and the newList object is returned as an Observable<List>.
        const newList = new List();
        newList._id = response._id;
        newList.title = response.title;
        return newList;
      })
    )
  }

  updateList(id:string, title:string){
    //we  want to send a web request to update a list
    return this.webReqService.patch(`lists/${id}`, {title})

  }

  deleteList(id:string){
    return this.webReqService.delete(`lists/${id}`)

  }



  getTasks(listId: any){
    return this.webReqService.get(`lists/${listId}/tasks`)
  }

  createTask(title:string, listId:any){
    return this.webReqService.post(`lists/${listId}/tasks`, {title})
  }

  deleteTask(listId:string, taskId:string){
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`)
  }

  updateTask(listId:string,taskId:string,title:string){
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, {title})

  }

  complete(task: Task){
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    })

  }

  newListCreated = new EventEmitter() // a new event  is created to emit after new list is created
  listDeleted = new EventEmitter() 
  listUpdated = new EventEmitter()
  
}

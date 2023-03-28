import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from 'src/app/models/list.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createList(title:string){

    //send request to create a new list
    return this.webReqService.post('lists',{title})
  }

  getLists(){
    return this.webReqService.get('lists')
  }

  getTasks(listId: any){
    return this.webReqService.get(`lists/${listId}/tasks`)
  }

  newListCreated = new EventEmitter() // a new event  is created to emit after new list is created

  
}

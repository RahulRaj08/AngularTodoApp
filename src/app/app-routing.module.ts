import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from './new-list/new-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoInboxComponent } from './todo-inbox/todo-inbox.component';
import { TodoLoginComponent } from './todo-login/todo-login.component';
import { TodoRegisterComponent } from './todo-register/todo-register.component';
import { TodoTodayComponent } from './todo-today/todo-today.component';

const routes: Routes = [
  { path: 'login', component: TodoLoginComponent},
  { path: 'register', component: TodoRegisterComponent},
  
  { 
    path: '', component: TodoHomeComponent,   
    children: [
      { path: '', redirectTo:'/lists', pathMatch:'full'},
      { path: 'today', component:TodoTodayComponent},
      { path: 'inbox', component:TodoInboxComponent},
      { path: 'newList', component:NewListComponent },
      { path: 'lists', component:TodoInboxComponent},
      { path: 'lists/:listId', component:TodoInboxComponent},
      { path: 'lists/:listId/newTask', component:NewTaskComponent },
      
      
    ]
  },

    // children:[

    //   { path: 'today', component:TodoTodayComponent},
    //   { path: 'inbox', component:TodoInboxComponent}

    // ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

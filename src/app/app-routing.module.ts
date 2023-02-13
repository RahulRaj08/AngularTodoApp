import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      { path: '', component:TodoInboxComponent},
      { path: 'today', component:TodoTodayComponent},
      { path: 'inbox', component:TodoInboxComponent},
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

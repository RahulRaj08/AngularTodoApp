import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoInboxComponent } from './todo-inbox/todo-inbox.component';
import { TodoLoginComponent } from './todo-login/todo-login.component';
import { TodoRegisterComponent } from './todo-register/todo-register.component';

const routes: Routes = [
  { path: '', component: TodoLoginComponent},
  { path: 'register', component: TodoRegisterComponent},
  { path: 'inbox', component: TodoInboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

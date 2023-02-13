import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoLoginComponent } from './todo-login/todo-login.component';
import { TodoRegisterComponent } from './todo-register/todo-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoInboxComponent } from './todo-inbox/todo-inbox.component';
import { TodoNavbarComponent } from './todo-navbar/todo-navbar.component';
import { MaterialModule } from './material/material.module';
import { TodoTodayComponent } from './todo-today/todo-today.component';
import { TodoUpcomingComponent } from './todo-upcoming/todo-upcoming.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoLoginComponent,
    TodoRegisterComponent,
    TodoInboxComponent,
    TodoNavbarComponent,
    TodoTodayComponent,
    TodoUpcomingComponent,
    TodoHomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoHomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

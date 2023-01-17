import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoLoginComponent } from './todo-login/todo-login.component';
import { TodoRegisterComponent } from './todo-register/todo-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoInboxComponent } from './todo-inbox/todo-inbox.component';
import { TodoNavbarComponent } from './todo-navbar/todo-navbar.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoLoginComponent,
    TodoRegisterComponent,
    TodoInboxComponent,
    TodoNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

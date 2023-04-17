import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-todo-register',
  templateUrl: './todo-register.component.html',
  styleUrls: ['./todo-register.component.css']
})
export class TodoRegisterComponent {

  constructor(private authService: AuthService ) {}

  onSignupButtonClicked(email:string, password:string){
    this.authService.signup(email,password).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      
    })


  }

}

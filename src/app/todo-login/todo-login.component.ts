import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-todo-login',
  templateUrl: './todo-login.component.html',
  styleUrls: ['./todo-login.component.css']
})
export class TodoLoginComponent {

  constructor(private authService: AuthService, private router: Router ) {}

  onLoginButtonClicked(email:string, password:string){
    this.authService.login(email,password).subscribe((res: HttpResponse<any>) => {
      if(res.status === 200){
        //login success
         this.router.navigate(['/lists']) 

      }
      console.log(res);
      
    })


  }

}

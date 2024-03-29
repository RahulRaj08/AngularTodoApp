import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay,tap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private webService: WebRequestService, private router: Router, private http: HttpClient) { }

  

  login(email: string, password:string){
    return this.webService.login(email,password).pipe(
      shareReplay(), // to avoid multiple subscribers starting multiple executions(here to avoid running login method multiple times)
      tap((res: HttpResponse<any>) => {
        //auth token is in the header of this response
        const accessToken = res.headers.get('x-access-token') ?? ''
        const refreshToken = res.headers.get('x-refresh-token') ?? ''
        
        this.setSession(res.body._id, accessToken, refreshToken )
        console.log('Logged In');
        
        
      })
    )
  }


  signup(email: string, password:string){
    return this.webService.signup(email,password).pipe(
      shareReplay(), // to avoid multiple subscribers starting multiple executions(here to avoid running login method multiple times)
      tap((res: HttpResponse<any>) => {
        //auth token is in the header of this response
        const accessToken = res.headers.get('x-access-token') ?? ''
        const refreshToken = res.headers.get('x-refresh-token') ?? ''
        
        this.setSession(res.body._id, accessToken, refreshToken )
        console.log('Successfully signed up and now logged In');
        
        
      })
    )
  }

  logout(){
    this.removeSession()

    this.router.navigateByUrl('/login')
  }

  getAccessToken(){
    return localStorage.getItem('x-access-token')
  }

  getRefreshToken(){
    return localStorage.getItem('x-refresh-token')
  }

  getUserId(){
    return localStorage.getItem('user-id')


  }
  
  setAccessToken(accessToken:string){
    localStorage.setItem('x-access-token',accessToken)
  }

  private setSession(userId: string, accessToken:string, refreshToken: string){ // to store tokens in local storage

    localStorage.setItem('user-id', userId)
    localStorage.setItem('x-access-token',accessToken)
    localStorage.setItem('x-refresh-token',refreshToken)

  }

  private removeSession( ){ 

    localStorage.removeItem('user-id')
    localStorage.removeItem('x-access-token')
    localStorage.removeItem('x-refresh-token')

  }

  getNewAccessToken(){

    const refreshToken = this.getRefreshToken() ?? '';
    const userId = this.getUserId() ?? '';
    return this.http.get(`${this.webService.ROOT_URL}/users/me/access-token`, {
      headers: {
        'x-refresh-token': refreshToken,
        '_id': userId
      },
      observe: 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
        const accessToken = res.headers.get('x-access-token') ?? ''
        this.setAccessToken(accessToken)
      })
    )
  }

}

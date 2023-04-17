import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Observable, empty, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebReqInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  refreshingAccessToken: boolean | undefined

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any>{

    //Handle the request
    request = this.addAuthHeader(request)

    //call next and handle request
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse) => {
        console.log(error);

        if(error.status === 401 && !this.refreshingAccessToken) {

          //refresh token
          return this.refreshAccessToken().pipe(
            switchMap(() => {
              request = this.addAuthHeader(request)
              return next.handle(request)
            }),
            catchError((err:any) => {
              console.log(err);
              this.authService.logout()
              return empty();
              
            })
          )


        
        }

        return throwError(error) 
        
      })
    )

  }

  refreshAccessToken() {

    this.refreshingAccessToken = true
    
    //call method in auth service to send req to generate new access token
    return this.authService.getNewAccessToken().pipe(
      tap(() => {                                      // tap allows to tap into the values of the observable
        this.refreshingAccessToken = false
        console.log("Access token refreshed");
        
      })
    )
  }

  addAuthHeader(request: HttpRequest<any>){
    //get the access token

    const token = this.authService.getAccessToken()
    
    if(token){
      return request.clone({
        setHeaders:{
          'x-access-token': token
        }
      })
    }
    return request

    //append access token to request header

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) {

    if(localStorage.getItem('userToken') != null)
    {
      this.setUserData();
    }
   }

  userData = new BehaviorSubject(null) ;

  setUserData():void
  {
    let encodedToken  = JSON.stringify(localStorage.getItem('userToken'));
    let decodeToken :any = jwtDecode(encodedToken);
    this.userData.next(decodeToken) ;
  }

  register(userData: object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',userData );
  }

  login(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',userData );
  }

  logOut():void
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}

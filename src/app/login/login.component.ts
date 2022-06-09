import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthenticationService:AuthenticationService , private _Router:Router) { }
  error:string = '' ;
  loginForm:FormGroup = new FormGroup ({

    email:new FormControl(null , [Validators.required , Validators.email]),
    password :new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z]{2,5}$/)]),
  });


  submitLogin(formInfo:FormGroup){

   this._AuthenticationService.login(formInfo.value).subscribe((response)=>{
    console.log(formInfo.value);
    console.log(response);
    if(response.message == 'success')
    {
      //login
      localStorage.setItem('userToken' , JSON.stringify(response.token));

      this._AuthenticationService.setUserData();
      this._Router.navigate(['/home',]);
    }
    else
    {
      //a3rf error
      this.error = 'Email or password wrong';
    }
   });
  }
  ngOnInit(): void {
  }

}

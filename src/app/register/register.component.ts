import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthenticationService:AuthenticationService , private _Router:Router) { }
  error:string = '' ;
  registerForm:FormGroup = new FormGroup ({

    first_name:new FormControl(null ,[Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    last_name:new FormControl(null ,[ Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    age:new FormControl(null , [Validators.required , Validators.min(16) , Validators.max(80)]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    password :new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z]{2,5}$/)]),
  });


  submitRegister(formInfo:FormGroup){

   this._AuthenticationService.register(formInfo.value).subscribe((response)=>{
    console.log(formInfo.value);
    console.log(response);
    if(response.message == 'success')
    {
      //login
      this._Router.navigate(['/login',])
    }
    else
    {
      //a3rf error
      this.error = 'Email is alread registered';
    }
   });
  }
  ngOnInit(): void {
  }

}

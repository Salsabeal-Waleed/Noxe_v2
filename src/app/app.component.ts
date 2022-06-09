import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finalproject';

   constructor(private _AuthenticationService:AuthenticationService)
  {
    //3ashan a3ml log out b3d mda
    // _AuthenticationService.userData.subscribe(()=>{
    //   if(_AuthenticationService.userData.getValue()!= null){

    //     setTimeout(()=>{_AuthenticationService.logOut();
    //     console.log('Bella');} , 5000);

    //   }

    // });


  }

}

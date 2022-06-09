import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LogComponent } from './log/log.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'password' , component:PasswordComponent},
  {path:'profile' , component:ProfileComponent},
  {path:'log' , component:LogComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

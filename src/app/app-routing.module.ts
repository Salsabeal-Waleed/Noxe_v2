import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthenticationGuard } from './authentication.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},

  {path:'home' , canActivate:[AuthenticationGuard] , component:HomeComponent},
  {path:'about' ,  canActivate:[AuthenticationGuard] , component:AboutComponent},
  {path:'gallery' ,canActivate:[AuthenticationGuard] , component:GalleryComponent},
  {path:'movies' , canActivate:[AuthenticationGuard] , component:MoviesComponent},
  {path:'moviedetails/:id' , canActivate:[AuthenticationGuard] , component:MoviedetailsComponent},
  {path:'contacts' , canActivate:[AuthenticationGuard] , component:ContactsComponent},
  {path:'tv' , canActivate:[AuthenticationGuard] , component:TvComponent},
  {path:'tvdetails/:id' , canActivate:[AuthenticationGuard] , component:TvDetailsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'settings' ,canActivate:[AuthenticationGuard], loadChildren:()=> import('./settings/settings.module').then(x => x.SettingsModule)},

  {path:'**' , component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

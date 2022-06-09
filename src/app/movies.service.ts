import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType:string):Observable<any>
  {
   return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=866cd3a065ef9304a549f1d65e494940`);
  }

  getMOvieDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US`)
  }

  GetSimilarMovies(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US&page=1`)
  }
}


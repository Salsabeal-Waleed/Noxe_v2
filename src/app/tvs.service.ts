import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvsService {

  constructor(private _HttpClient:HttpClient) { }

  getTVDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US`)
  }

  GetSimilarTV(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US&page=1`)
  }
}

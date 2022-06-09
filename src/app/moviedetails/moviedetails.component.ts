import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

id:string = '';
voteC:string = '';
moviesDetails:any = [];
moviesSimilar:any = [];
imgPrefix:string = 'https://image.tmdb.org/t/p/w500/';

constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService , private _Router:Router) {




}

  ngOnInit(): void {

    this._ActivatedRoute.params.subscribe(val =>{
      this.id = this._ActivatedRoute.snapshot.params['id'];
      console.log(this.id);


      this._MoviesService.getMOvieDetails(this.id).subscribe((response)=>{

        this.moviesDetails = response ;
      });

      this._MoviesService.GetSimilarMovies(this.id).subscribe((response)=>{

        this.moviesSimilar = response.results.slice(0,6) ;
      });

    });


  }




}

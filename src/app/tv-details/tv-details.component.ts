import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvsService } from '../tvs.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  id:string = "";
  tvsDetails:any = [];
  tvsSimilar:any = [];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private _TvsService:TvsService , private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this._ActivatedRoute.params.subscribe(val =>{

      this.id = this._ActivatedRoute.snapshot.params['id'];
      console.log(this.id);

      this._TvsService.getTVDetails(this.id).subscribe((response) =>{

        this.tvsDetails = response;
        console.log(this.tvsDetails);

      });


      this._TvsService.GetSimilarTV(this.id).subscribe((response)=>{

        this.tvsSimilar = response.results.slice(0,6) ;
      });

    })
  }

}

import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies : any[] = [];

  constructor(private movieSvc : MovieService) { }

  /*

  {"page":1,"results":[{"adult":false,"backdrop_path":"/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg","genre_ids":[28,35,10751,16,12],"id":587807,"original_language":"en","original_title":"Tom & Jerry

  */

  ngOnInit(): void {
    this.movieSvc.getMovies()
                 .subscribe( jsonData => this.movies = jsonData.results);
  }

}

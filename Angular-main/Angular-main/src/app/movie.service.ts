import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  serviceUrl = "https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=true&api_key=e792bec495619ac3ee80ecd78425d013";

  // injection d'un httpClient :
  constructor(private http : HttpClient) { }

  getMovies() : Observable<any> {
    return this.http.get(this.serviceUrl);
  }
}

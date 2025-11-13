import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Movie {
  getPopularMovies(){}
searchMovies(query: string){}
getMovieDetails(id: number){}
}

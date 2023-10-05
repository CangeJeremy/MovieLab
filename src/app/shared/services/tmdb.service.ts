import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey: string = "b15bcc53eb05430aa6a251760df00d38";
  private apiUrl: string = "https://api.themoviedb.org/3";

  constructor(private _http: HttpClient) { }

  getMovies() {
    const endpoint = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
    return this._http.get(endpoint);
  }

  getMovieDetails(movieId: number): Observable<any> {
    const endpoint = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this._http.get(endpoint);
  }

  getMediaType(movieId: number): Observable<any> {
    const endpoint = `${this.apiUrl}/movie/${movieId}/external_ids?api_key=${this.apiKey}`;
    return this._http.get(endpoint)
  }

  getMovieTrailer(movieId: number): Observable<any> {
    const endpoint = `${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`;
    return this._http.get(endpoint);
  }

  getMovieCredits(movieId: number): Observable<any> {
    const endpoint = `${this.apiUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`;
    return this._http.get(endpoint);
  }

  searchMovies(query: string): Observable<any> {
    const endpoint = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this._http.get(endpoint);
  }
}

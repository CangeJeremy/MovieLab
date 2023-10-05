import {Component, EventEmitter, Output} from '@angular/core';
import {Movie} from "../../../shared/models/movie.model";
import {TmdbService} from "../../../shared/services/tmdb.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery : string = "";
  searchResult: Movie[] = [];

  constructor(private tmdb: TmdbService) { }

  searchMovies() {
    if(this.searchQuery.trim() === '')
    {
      return;
    }

    this.tmdb.searchMovies(this.searchQuery).subscribe((data: any) => {
      this.searchResult = data.results;
    });
  }

  getMoviePoster(movie: Movie): string {
    return `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
  }
}

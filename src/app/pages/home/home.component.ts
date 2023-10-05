import {Component, OnInit} from '@angular/core';
import {TmdbService} from "../../shared/services/tmdb.service";
import {Movie} from "../../shared/models/movie.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  movieList: Movie[] = [];

  constructor(private tmdb: TmdbService) { }
  ngOnInit() {
    this.tmdb.getMovies().subscribe((data: any) => {
      this.movieList = data.results;
    });
  }
  getMoviePoster(movie: Movie): string {
    return `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
  }
}

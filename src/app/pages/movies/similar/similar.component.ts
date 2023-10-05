import {Component, Input, OnInit} from '@angular/core';
import {TmdbService} from "../../../shared/services/tmdb.service";
import {Movie} from "../../../shared/models/movie.model";

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit {
  @Input() movieId: number | null = null;
  similarMovies: any[] = [];

  constructor(private tmdb: TmdbService) { }

  ngOnInit() {
    if(this.movieId) {
      this.tmdb.getSimilarMovies(this.movieId).subscribe((similarMovies: any) => {
        this.similarMovies = similarMovies.results.slice(0, 4);
      });
    }
  }

  getMoviePoster(movie: Movie): string {
    return `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
  }
}

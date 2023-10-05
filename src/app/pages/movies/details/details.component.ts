import {Component, OnInit} from '@angular/core';
import {Movie} from "../../../shared/models/movie.model";
import {ActivatedRoute} from "@angular/router";
import {TmdbService} from "../../../shared/services/tmdb.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movie: Movie | null = null;
  trailerLink: string = "";
  credits: any | null = null;
  actors: any | null = null;

  constructor(private route: ActivatedRoute, private tmdb: TmdbService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieId = Number(params.get('id'));

      this.tmdb.getMovieDetails(movieId).subscribe((movieDetails: any) => {
        this.movie = movieDetails;
      });

      this.tmdb.getMovieTrailer(movieId).subscribe((videos: any) => {
        if(videos.results.length > 0) {
          this.trailerLink = `https://www.youtube.com/embed/${videos.results[0].key}`;
        }
      });

      this.tmdb.getMovieCredits(movieId).subscribe((creditsData: any) => {
        this.credits = creditsData;
        this.actors = creditsData.cast.filter((member: any) => member.order < 5);
      });
    })

  }

  getMoviePoster(movie: Movie): string {
    return `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
  }

  getActorImage(profilePath: string): string {
    if(profilePath) {
      return `https://image.tmdb.org/t/p/w185${profilePath}`;
    }
    else
    {
      return "";
    }
  }
}

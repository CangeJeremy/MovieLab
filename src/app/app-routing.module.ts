import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SearchComponent} from "./pages/movies/search/search.component";
import {DetailsComponent} from "./pages/movies/details/details.component";
import {SimilarComponent} from "./pages/movies/similar/similar.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "search", component: SearchComponent},
  {path: "movie/:id", component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

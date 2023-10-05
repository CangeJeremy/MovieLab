import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from './pages/movies/search/search.component';
import { DetailsComponent } from './pages/movies/details/details.component';
import { SimilarComponent } from './pages/movies/similar/similar.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import {FormsModule} from "@angular/forms";
import { SafeResourceUrlPipe } from './shared/pipes/safe-resource-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent,
    SimilarComponent,
    TruncatePipe,
    SafeResourceUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Root Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

// Multisptep form Component
import { UserComponent } from './user/user.component';
import { MusicComponent } from './music/music.component';
import { MovieComponent } from './movie/movie.component';
import { FeedsComponent } from './feeds/feeds.component';
import { ResultComponent } from './result/result.component';

import { FormDataService } from './data/form-data.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    MusicComponent,
    MovieComponent,
    FeedsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }

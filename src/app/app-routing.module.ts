import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { MusicComponent } from './music/music.component';
import { MovieComponent } from './movie/movie.component';
import { FeedsComponent } from './feeds/feeds.component';
import { ResultComponent } from './result/result.component';

export const appRoutes: Routes = [
  { path: 'personal', component: UserComponent },
  { path: 'music', component: MusicComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'feeds', component: FeedsComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo: '/personal', pathMatch: 'full' },
  { path: '**', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../data/form-data.model';
import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  title = 'Movies Feedback';
  movie: Movie;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.movie = this.formDataService.getMovie();
    console.log('Music Data Loaded');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setMovie(this.movie);
    return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
      // Navigate to the personal page
      this.router.navigate(['/music']);
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the address page
      this.router.navigate(['/feeds']);
    }
  }
}

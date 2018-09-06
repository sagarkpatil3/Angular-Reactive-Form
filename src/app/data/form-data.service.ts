import { Injectable } from '@angular/core';
import { FormData, Personal, Music, Movie, Feeds } from './form-data.model';
import { Http } from '@angular/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class FormDataService {

  private formData: FormData = new FormData();
  private isPersonalFormValid = false;
  private isMusicFormValid = false;
  private isMovieFormValid = false;
  private isFeedsFormValid = false;

  getPersonal(): Personal {
    const personal: any = {
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      email: this.formData.email,
      contact_no: this.formData.contact_no
    };
    return personal;
  }

  setPersonal(data: Personal) {
    this.isPersonalFormValid = true;
    this.formData.firstName = data.firstName;
    this.formData.lastName = data.lastName;
    this.formData.email = data.email;
    this.formData.contact_no = data.contact_no;
  }

  getMusic(): Music {
    const music: any = {
      musicFeedback: this.formData.musicFeedback
    };
    return music;
  }

  setMusic(data: Music) {
    this.isMusicFormValid = true;
    this.formData.musicFeedback = data.musicFeedback;
  }

  getMovie(): Movie {
    const movie: Movie = {
      movieFeedback: this.formData.movieFeedback,
    };
    return movie;
  }

  setMovie(data: Movie) {
    this.isMovieFormValid = true;
    this.formData.movieFeedback = data.movieFeedback;
  }

  getFeeds(): Feeds {
    const feeds: Feeds = {
      feedsFeedback: this.formData.feedsFeedback,
    };
    return feeds;
  }

  setFeeds(data: Feeds) {
    this.isFeedsFormValid = true;
    this.formData.feedsFeedback = data.feedsFeedback;
  }

  getFormData(): FormData {
    return this.formData;
  }

  resetFormData(): FormData {
    this.formData.clear();
    this.isPersonalFormValid = this.isMusicFormValid = this.isMovieFormValid = this.isFeedsFormValid = false;
    return this.formData;
  }

  isFormValid() {
    return this.isPersonalFormValid &&
      this.isMusicFormValid &&
      this.isMovieFormValid &&
      this.isFeedsFormValid;
  }
  
  constructor() { }
  // constructor(private http: Http) { }

  // addfeedback(formData: any) {
  //   return this.http.post('', this.formData).pipe( map( res => res.json() );
  // }

}

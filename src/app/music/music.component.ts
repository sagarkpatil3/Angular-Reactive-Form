import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Music } from '../data/form-data.model';
import { FormDataService } from '../data/form-data.service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  title = 'Music Feedback';
  music: Music;
  form: any;

  constructor( private router: Router, private formDataService: FormDataService ) { }

  ngOnInit() {
    this.music = this.formDataService.getMusic();
    console.log('Music Data Loaded');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setMusic(this.music);
    return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
      // Navigate to the personal page
      this.router.navigate(['/personal']);
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the address page
      this.router.navigate(['/movie']);
    }
  }
}

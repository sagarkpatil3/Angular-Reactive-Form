import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Feeds } from '../data/form-data.model';
import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  title = 'Feeds Feedback';
  feeds: Feeds;
  form: any;
  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.feeds = this.formDataService.getFeeds();
    console.log('Music Data Loaded');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setFeeds(this.feeds);
    return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
      // Navigate to the personal page
      this.router.navigate(['/movie']);
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the address page
      this.router.navigate(['/result']);
    }
  }

}

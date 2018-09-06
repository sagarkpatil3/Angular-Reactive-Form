import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Personal } from '../data/form-data.model';
import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'PLEASE TELL US ABOUT YOURSELF.';
  personal: Personal;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();
    console.log('Personal info Loaded ');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setPersonal(this.personal);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/music']);
    }
  }

}

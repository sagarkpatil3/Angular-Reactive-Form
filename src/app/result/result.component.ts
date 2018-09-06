import { Component, OnInit, Input } from '@angular/core';
import { FormData } from '../data/form-data.model';
import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  title = 'Thanks for staying tuned!';
  @Input() formData: FormData;
  isFormValid = false;

  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.isFormValid = this.formDataService.isFormValid();
    console.log('Result feature loaded!');
  }

  submit() {
    alert('Excellent Job!');
    this.formData = this.formDataService.getFormData();
    // this.formDataService.addfeedback(this.formData).subscribe( data => {});
    // console.log(this.formData);
    this.isFormValid = false;
  }

}

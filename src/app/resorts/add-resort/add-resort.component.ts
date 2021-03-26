import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Resort } from '../shared/resort.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-resort',
  templateUrl: './add-resort.component.html',
  styleUrls: ['./add-resort.component.css']
})
export class AddResortComponent {
  @Output() resortCreated = new EventEmitter<Resort>();
  @Output() closeModal = new EventEmitter();

  resortName = '';
  resortCity = '';
  resortProvince = '';
  resortCountry = '';
  resortRating = 0;
  initialImage = '';
  resortLiftTicketCost = 0;
  resortDescription = '';
  resortSnow = 0;
  resortSkiPasses = '';
  displayFormFail = false;

  resortForFirebase = {
    resortName: this.resortName,
  }

  constructor(private http: HttpClient) { }

  resetForm() {
    this.resortName = '';
    this.resortCity = '';
    this.resortProvince = '';
    this.resortCountry = '';
    this.resortRating = 0;
    this.initialImage = '';
    this.resortLiftTicketCost = 0;
    this.resortDescription = '';
    this.resortSnow = 0;
    this.resortSkiPasses = '';
    this.displayFormFail = false;

    this.closeModal.emit();
  }

  onAddResort() {
    const fieldsFilled = this.checkForEmptyFields();
    if (fieldsFilled) {
      this.resortCreated.emit({
        name: this.resortName,
        city: this.resortCity,
        province: this.resortProvince,
        country: this.resortCountry,
        latitude: '',
        longitude: '',
        rating: this.resortRating,
        description: this.resortDescription,
        imagePath: this.initialImage,
        skiPasses: this.resortSkiPasses,
        snowInInches: this.resortSnow,
        liftPassCost: this.resortLiftTicketCost
      });
      this.onCreateResort();
      this.resetForm();
    } else {
      this.displayFormFail = true;
      setTimeout(() => {
        this.displayFormFail = false;
      }, 4500);
    }
  }

  checkForEmptyFields(): boolean {
    if (this.resortName !== '' && this.resortCity !== '' && this.resortProvince !== '' &&
      this.resortCountry !== '') {
      return true;
    }
    return false;
  }

  onCreateResort() {
    const fieldsFilled = this.checkForEmptyFields();
    if (fieldsFilled) {
      const url = 'https://powfish.firebaseio.com/resorts.json';
      let resorts = {
        name: this.resortName,
        city: this.resortCity,
        province: this.resortProvince,
        country: this.resortCountry,
        rating: this.resortRating,
        description: this.resortDescription,
        imagePath: this.initialImage,
        skiPasses: this.resortSkiPasses,
        snowInInches: this.resortSnow,
        liftPassCost: this.resortLiftTicketCost
      }
      this.http.post(
        url,
        resorts
      ).subscribe(responseData => {
        console.log(responseData);
      });
    } else {
      console.log('Please fill all required fields');
    }
  }

}
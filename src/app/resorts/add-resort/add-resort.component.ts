import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Resort } from '../shared/resort.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-resort',
  templateUrl: './add-resort.component.html',
  styleUrls: ['./add-resort.component.css']
})
export class AddResortComponent implements OnInit {
  @Output() resortCreated = new EventEmitter<Resort>();

  resortName = '';
  resortCity = '';
  resortProvince = '';
  resortCountry = '';
  resortRating = 0;
  initalImage = '';
  resortLiftTicketCost = 0;
  resortDescription = '';
  resortSnow = '';
  resortSkiPasses = '';

  // resortLocation = '';
  // resortLatitude = '';
  // resortLongitude = '';
  // resortImagePath = '';

  resortForFirebase = {
    resortName: this.resortName,
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  resetForm() {
    this.resortName = '';
    this.resortCity = '';
    this.resortProvince = '';
    this.resortCountry = '';
    this.resortRating = 0;
    this.initalImage = '';
    this.resortLiftTicketCost = 0;
    this.resortDescription = '';
    this.resortSnow = '';
    this.resortSkiPasses = '';
  }

  onAddResort() {
    this.resortCreated.emit({
      name: this.resortName,
      city: this.resortCity,
      province: this.resortProvince,
      country: this.resortCountry,
      latitude: '',
      longitude: '',
      rating: this.resortRating,
      description: this.resortDescription,
      imagePath: this.initalImage,
      skiPasses: this.resortSkiPasses,
      snowInInches: this.resortSnow,
      liftPassCost: this.resortLiftTicketCost
    });
    this.onCreateResort();
    // this.fetchResorts();
    this.resetForm();
  }

  onCreateResort() {
    // check for empty fields, if empty fields throw an alert
    // set a timeout to show then hide alert
    const url = 'https://powfish.firebaseio.com/resorts.json';
    let resorts = {
      name: this.resortName,
      city: this.resortCity,
      province: this.resortProvince,
      country: this.resortCountry,
      rating: this.resortRating,
      description: this.resortDescription,
      imagePath: this.initalImage,
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
  }


}
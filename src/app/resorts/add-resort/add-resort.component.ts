import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Resort} from '../shared/resort.model';

@Component({
  selector: 'app-add-resort',
  templateUrl: './add-resort.component.html',
  styleUrls: ['./add-resort.component.css']
})
export class AddResortComponent implements OnInit {
  @Output() resortCreated = new EventEmitter<Resort>();
  resortName = '';
  resortLocation = '';
  resortCountry = '';
  resortRating = 0;
  resortImagePath = '';
  resortSkiPasses = '';
  resortSnowInInches = '';
  resortDescription = '';
  resortLiftTicketCost = 0;
  
  constructor() { }

  ngOnInit() {
  }

  resetForm() {
    this.resortName = '';
    this.resortLocation = '';
    this.resortCountry = '';
    this.resortRating = 0;
    this.resortImagePath = '';
    this.resortSkiPasses = '';
    this.resortSnowInInches = '';
    this.resortDescription = '';
    this.resortLiftTicketCost = 0;
  }

  onAddResort() {
    this.resortCreated.emit({
        name: this.resortName,
        location: this.resortLocation,
        country: this.resortCountry,
        rating: this.resortRating,
        description: this.resortDescription,
        imagePath: this.resortImagePath,
        skiPasses: this.resortSkiPasses,
        snowInInches: this.resortSnowInInches,
        latlong: '',
        geo: ['',''],
        reviews: ['', ''],
        liftPassCost: this.resortLiftTicketCost
    });
    this.resetForm();
  }
}

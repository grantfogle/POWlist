import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { Resort } from '../shared/resort.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ngForm } from '@angular/forms';
import { ResortsService } from '../../services/resorts.service';

@Component({
  selector: 'app-add-resort',
  templateUrl: './add-resort.component.html',
  styleUrls: ['./add-resort.component.css']
})
export class AddResortComponent {
  @Output() resortCreated = new EventEmitter<Resort>();
  @Output() closeModal = new EventEmitter();
  @ViewChild('addResortForm') resortForm: ngForm;
  displayFormFail = false;

  resortBasicInfo = {
    name: { label: 'Name', value: '' },
    city: { label: 'City', value: '' },
    province: { label: 'Province', value: '' },
    country: { label: 'Country', value: '' },
  };
  
  resortStats = {
    adultFullDayTicketInUSD: { label: 'Adult One Day Lift Ticket', value: null },
    latitude: { label: 'Latitude', value: '' },
    longitude: { label: 'Longitude', value: '' },
    lifts: { label: 'Number of lifts', value: null },
    nearestAirportInMiles: { label: 'How far is the nearest airport?', value: null },
    skiableAcres: { label: 'Skiable acres', value: null },
    snowPerYearInInches: { label: 'Average snowfall (inches)?', value: null },
    terrainParks: { label: 'Number of terrain parks', value: null },
    trails: { label: 'Number of trails', value: null },
    vertical: { label: 'Vertical feet', value: null },
    website: { label: 'Resort url', value: '' }
  }

  resortStatMultiSelect = {
    bestTimeToVisit: {
      label: 'Best Time of year to vist',
      value: null,
      options: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    bikePark: {
      label: 'Bike park?',
      value: null,
      options: ['No', 'Yes']
    },
    sideCountryAccess: {
      label: 'Bc/sidecountry access?',
      value: null,
      options: ['No', 'Yes']
    },
    skiPasses: {
      label: 'Is this resort on any passes? ',
      value: null,
      options: ['Epic', 'Ikon', 'Mountain Collective']
    }
  }

  terrainBreakdown = {
    beginnerTerrainPercentage: {
      label: 'Beg Terrain %',
      value: null
    },
    intermediateTerrainPercentage: {
      label: 'Int Terrain %',
      value: null
    },
    advancedTerrainPercentage: {
      label: 'Adv Terrain %',
      value: null
    }
  }

  resortImages = {
    coverPhoto: {},
    icon: {},
    cardImage: {},
  }

  resortForFirebase = {
    resortName: this.resortName,
  }

  constructor(private http: HttpClient, public resortsService: ResortsService) { }

  submitNewResort() {
    console.log(this.resortForm);
  }

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
import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { Resort, Resort2 } from '../shared/resort.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ResortsService } from '../../services/resorts.service';

@Component({
  selector: 'app-add-resort',
  templateUrl: './add-resort.component.html',
  styleUrls: ['./add-resort.component.css']
})
export class AddResortComponent {
  @Output() closeModal = new EventEmitter();
  @ViewChild('addResortForm') resortForm: NgForm;
  displayFormFail = false;
  displayThankyou = false;
  
  newResort: Resort2 = {
    name: '',
    city: '',
    country: '',
    province: '',
    description: '',
    latitude: '',
    longitude: '',
    overallRating: null,
    website: '',
    coverImage: '',
    logo: '',
    cardImage: '',
    stats: {
      adultFullDayTicketInUSD: null,
      bestTimeToVisit: '',
      bikePark: '',
      lifts: null,
      nearestAirportInMiles: null,
      skiableAcres: null,
      skiPasses: [],
      sideCountryAccess: '',
      snowPerYearInInches: null,
      terrainParks: null,
      trails: null,
      verticalFeet: null,
      advancedTerrainPercentage: null,
      expertTerrainPercentage: null,
      beginnerTerrainPercentage: null,
      intermediateTerrainPercentage: null,
    }
  };

  resortFormBasicInfoArr = [
    { name: 'name', label: 'Resort Name', placeholder: 'Beaver Creek', value: this.newResort.name },
    { name: 'city', label: 'City', placeholder: 'Avon', value: this.newResort.city },
    { name: 'province', label: 'Province', placeholder: 'Colorado', value: this.newResort.province },
    { name: 'country', label: 'Country', placeholder: 'United States of America', value: this.newResort.province },
    { name: 'latitude', label: 'Latitude', placeholder: '39.6042', value: this.newResort.latitude },
    { name: 'longitude', label: 'Longitude', placeholder: '-106.5165', value: this.newResort.longitude },
    { name: 'website', label: 'Website', placeholder: 'beavercreek.com', value: this.newResort.website },
  ];
  
  additionalResortFormStatsArr = [
    { name: 'adultFullDayTicketInUSD', label: 'Adult Full Day Ticket Cost ($)', placeholder: '148', value: this.newResort.stats.adultFullDayTicketInUSD },
    { name: 'lifts', label: 'Number of lifts', placeholder: '14', value: this.newResort.stats.lifts },
    { name: 'nearestAirportInMiles', label: 'Nearest airport in miles', placeholder: '140', value: this.newResort.stats.nearestAirportInMiles },
    { name: 'skiableAcres', label: 'Skiable Acres', placeholder: '2200', value: this.newResort.stats.skiableAcres },
    { name: 'snowPerYearInInches', label: 'Average Snowfall (inches)', placeholder: '250', value: this.newResort.stats.snowPerYearInInches },
    { name: 'terrainParks', label: 'Number of Terrain Parks', placeholder: '2', value: this.newResort.stats.terrainParks },
    { name: 'trails', label: 'Number of Trails', placeholder: '84', value: this.newResort.stats.trails },
    { name: 'verticalFeet', label: 'Vertical Feet', placeholder: '300', value: this.newResort.stats.verticalFeet },
  ];

  terrainBreakdownArr = [
    { name: 'beginnerTerrainPercentage', label: 'Beginner Terrain (%)', placeholder: '33'},
    { name: 'intermediateTerrainPercentage', label: 'Intermediate Terrain (%)', placeholder: '27'},
    { name: 'advancedTerrainPercentage', label: 'Advanced Terrain (%)', placeholder: '30'},
    { name: 'expertTerrainPercentage', label: 'Expert Terrain (%)', placeholder: '10'},
  ];

  resortStatsDropdownArr = [
    { 
      name: 'bestTimeToVisit',
      label: 'Best Time to Visit', 
      options: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      value: this.newResort.stats.bestTimeToVisit
    },
    {
      name: 'bikePark',
      label: 'Bike Park?',
      options: ['No', 'Yes'],
      value: this.newResort.stats.bikePark
    },
    {
      name: 'sideCountryAccess',
      label: 'BC/SideCountry Access?',
      options: ['No', 'Yes'],
      value: this.newResort.stats.sideCountryAccess
    },
    {
      name: 'skiPasses',
      label: 'Is this resort on any passes?',
      options: ['Epic', 'Ikon', 'Mountain Collective'],
      value: this.newResort.stats.sideCountryAccess
    }
  ];

  // resortImages = {
  //   coverPhoto: {},
  //   icon: {},
  //   cardImage: {},
  // }

  constructor(private http: HttpClient, public resortsService: ResortsService) { }

  submitNewResort() {
    if (this.resortForm.valid) {
      this.resortsService.addResort(this.newResort);
      this.displayThankyou = true;
      setTimeout(() => {
          this.displayThankyou = false;
          this.resetForm();
      }, 4500);
    }
  }

  resetForm() {
    this.closeModal.emit();
  }

}
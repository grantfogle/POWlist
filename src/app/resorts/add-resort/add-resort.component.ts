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
    resortStats: this.newResortStats
  };
  newResortStats: ResortStats = {
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
    beginnerTerrainPercentage: null,
    intermediateTerrainPercentage: null,
  }

  resortFormBasicInfoArr = [
    { name: 'name', label: 'Resort Name', placeholder: 'Beaver Creek', value: this.newResort.name },
    { name: 'city', label: 'City', placeholder: 'Avon', value: this.newResort.city },
    { name: 'province', label: 'Province', placeholder: 'Colorado', value: this.newResort.province },
    { name: 'country', label: 'Country', placeholder: 'United States of America', value: this.newResort.province },
    { name: 'latitude', label: 'Latitude', placeholder: '39.6042', value: this.newResort.latitude },
    { name: 'longitude', label: 'Longitude', placeholder: '-106.5165', value: this.newResort.longitude },
    { name: 'website', label: 'Website', placeholder: 'beavercreek.com', value: this.newResort.website },
  ];
  
  additionalResortFormStats = [
    { name: 'adultFullDayTicketInUSD', label: 'Adult Full Day Ticket Cost ($)', placeholder: '148', value: this.newResortStats.adultFullDayTicketInUSD },
    { name: 'lifts', label: 'Number of lifts', placeholder: '14', value: this.newResortStats.lifts },
    { name: 'nearestAirportInMiles', label: 'Nearest airport in miles', placeholder: '140', value: this.newResortStats.nearestAirportInMiles },
    { name: 'skiableAcres', label: 'Skiable Acres', placeholder: '2200', value: this.newResortStats.skiableAcres },
    { name: 'snowPerYearInInches', label: 'Average Snowfall (inches)', placeholder: '250', value: this.newResortStats.snowPerYearInInches },
    { name: 'terrainParks', label: 'Number of Terrain Parks', placeholder: '2', value: this.newResortStats.terrainParks },
    { name: 'trails', label: 'Number of Trails', placeholder: '84', value: this.newResortStats.trails },
    { name: 'verticalFeet', label: 'Vertical Feet', placeholder: '300', value: this.newResortStats.verticalFeet },
  ]

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

  constructor(private http: HttpClient, public resortsService: ResortsService) { }

  submitNewResort() {
    this.resortsService.addResort(this.newResort);
    console.log(this.resortForm);
  }

  resetForm() {
    this.closeModal.emit();
  }

      // setTimeout(() => {
      //   this.displayFormFail = false;
      // }, 4500);

}
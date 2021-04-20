import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { Resort, ResortStatsObj } from '../shared/resort.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ResortsService } from '../../services/resorts.service';
import {
  ADD_RESORT_FORM_BASIC_INFO,
  ADD_RESORT_FORM_STATS,
  ADD_RESORT_FORM_TERRAIN_BREAKDOWN,
  ADD_RESORT_FORM_DROPDOWNS
} from '../../shared/constants/add-resort-form.config';

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
  addResortFormBasicInfo = ADD_RESORT_FORM_BASIC_INFO;
  addResortFormStats = ADD_RESORT_FORM_STATS;
  addResortFormTerrainBreakdown = ADD_RESORT_FORM_TERRAIN_BREAKDOWN;
  addResortFormDropdowns = ADD_RESORT_FORM_DROPDOWNS;
  newResort: Resort = {
    name: '',
    city: '',
    province: '',
    country: '',
    latitude: '',
    longitude: '',
    website: '',
    description: '',
    coverImage: '',
    logo: '',
    cardImage: '',
    stats: {
      adultFullDayTicketInUSD: { label: 'Adult 1 Day Ticket', value: '' },
      bestTimeToVisit: { label: 'Best Time to Visit', value: '' },
      bikePark: { label: 'Bike Park?', value: '' },
      lifts: { label: 'Lifts', value: null },
      nearestAirportInMiles: { label: 'Nearest Airport (miles)', value: '' },
      skiableAcres: { label: 'Skiable Acres', value: '' },
      skiPasses: { label: 'Ski Passes', value: [] },
      sideCountryAccess: { label: 'BC/Sidecountry Access', value: '' },
      snowPerYearInInches: { label: 'Snow per Year (inches)', value: '' },
      terrainParks: { label: 'Terrain Parks?', value: '' },
      trails: { label: 'Trails', value: '' },
      verticalFeet: { label: 'Vertical Feet', value: '' },
    },
    terrainBreakdown: {
      advTerrainPercentage: { label: 'Advanced Terrain Percentage', value: null },
      begTerrainPercentage: { label: 'Beginner Terrain Percentage', value: null },
      intTerrainPercentage: { label: 'Intermediate Terrain Percentage', value: null },
      exTerrainPercentage: { label: 'Expert Terrain Percentage', value: null }
    }
  };

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
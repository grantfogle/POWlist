import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Resort } from '../../shared/resort.model';

@Component({
    selector: 'app-resort-modal-info',
    templateUrl: './resort-modal-info.component.html',
    styleUrls: ['resort-modal-info.component.css']
})

export class ResortModalInfoComponent implements OnInit {
    @Input() id: string;
    resortReviews: [{
        // resortId: '123'},
        overallRating: 4.4}]
        // snowRating: 4.2,
        // valueRating: 3.7,
        // nightLife: 2.2,
        // crowds: 4.2,
        // bcAccess: 3.2,
        // begTerrain: 3.2,
        // intTerrain: 1.1,
        // advTerrain: 3.3];

    resortTable = [];

    newResortTable = {
        overallRating: '',
        lifts: '',
        passes: '',
        sideCountryAccess: '',
        snow: '',
        terrainBreakdown: {
            green: '',
            blue: '',
            black: '',
            extreme: ''
        },
        terrainParks: '',
        ticketPrices: '',
        trails: '',
        vertical: ''
    }

    constructor(public http: HttpClient) { }

    ngOnInit() {
        this.retrieveResortInfo();
    }

    retrieveResortInfo() {
        const url = 'https://powfish.firebaseio.com/resortData.json';
        this.http.get(
            url
        ).subscribe(responseData => {
            for (const resort in responseData) {
                if (responseData[resort].id === this.id) {
                    this.newResortTable.overallRating = responseData[resort].overallRating;
                    this.newResortTable.lifts = responseData[resort].lifts;
                    this.newResortTable.passes = responseData[resort].passes;
                    this.newResortTable.sideCountryAccess = responseData[resort].sideCountryAccess;
                    this.newResortTable.snow = responseData[resort].snow;
                    this.newResortTable.terrainBreakdown = responseData[resort].terrainBreakdown;
                    this.newResortTable.terrainParks = responseData[resort].terrainParks;
                    this.newResortTable.ticketPrices = responseData[resort].ticketPrices;
                    this.newResortTable.trails = responseData[resort].trails;
                    this.newResortTable.vertical = responseData[resort].vertical;
                }
            }
        });
    }

    terrainBreakdown() {
        return `${this.newResortTable.terrainBreakdown.green} green ${this.newResortTable.terrainBreakdown.blue} blue ${this.newResortTable.terrainBreakdown.black}
         black ${this.newResortTable.terrainBreakdown.extreme} extreme`;
    }
}

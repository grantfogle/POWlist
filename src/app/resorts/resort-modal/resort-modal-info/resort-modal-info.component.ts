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
    resortTable = [
        { name: 'Rating', data: '4.4' },
        { name: 'Snow', data: '400 inches' },
        { name: 'Passes', data: 'Ikon' },
        { name: 'Ticket Prices', data: '$130' },
        { name: 'Terrain Breakdown', data: '20% green, 40% blue, 20% black/double black' },
        { name: 'Ticket Prices', data: '$130' },
        { name: 'Lifts', data: '12 (4 double chairs, 4 quads, 2 gondolas)' },
        { name: 'Side Country Access', data: 'Yes' },
        { name: 'Passes', data: 'Crowded' },
    ];
    newResortTable = {
        overallRating: '',
        lifts: '',
        passes: '',
        sideCountryAccess: '',
        snow: '',
        terrainBreakdown: '',
        terrainParks: '',
        ticketPrices: '',
        trails: '',
        vertical: ''
    }

    constructor(public http: HttpClient) { }

    ngOnInit() {
        // this.fetchResortData();
        this.retrieveResortInfo();
    }

    retrieveResortInfo() {
        // check for empty fields, if empty fields throw an alert
        // set a timeout to show then hide alert
        const url = 'https://powfish.firebaseio.com/resortData.json';
        this.http.get(
            url
        ).subscribe(responseData => {
            console.log(responseData);
            for (const resort in responseData) {
                // console.log('ressssort', responseData[resort]);
                if (responseData[resort].id === this.id) {
                    console.log(responseData[resort].terrainBreakdown)
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
            console.log('cats', this.newResortTable);
        });
    }
    // get resort data
    // fetchResortData() {
    // this.http.asdfasf
    // }
}

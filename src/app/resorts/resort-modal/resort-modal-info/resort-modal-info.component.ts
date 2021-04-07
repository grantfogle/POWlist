import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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
    @ViewChild('reviewProgressBar') reviewProgress: ElementRef;
    resortData = [{}];

    // resortReviews: {
    //     resortId: '123',
    //     reviewCategories: {
    //         overall: {name: 'Overall Rating', score: 4.2},
    //         snow: {name: 'Snow', score: 4.2},
    //         value: {name: 'Value', score: 2.2},
    //         nightLife: {name: 'Nightlife', score: 2.4},
    //         crowds: {name: 'Crowds', score: 3.3},
    //         bcAccess: {name: 'BC Access', score: 2.5},
    //         begTerrain: {name: 'Beginner Terrain', score: 2.9},
    //         intTerrain: {name: 'Intermediate Terrain', score: 3.7},
    //         advTerrain: {name: 'Advanced Terrain', score: 4.7},
    //         terrainParks: {name: 'Terrain Parks', score: 3.7}
    //     }
    // };

    newResortReviews = {
        resortId: '123',
        reviewCategories: [
            {name: 'Overall Rating', score: 4.2},
            {name: 'Snow', score: 4.2},
            {name: 'Value', score: 2.2},
            {name: 'Nightlife', score: 2.4},
            {name: 'Crowds', score: 3.3},
            {name: 'BC Access', score: 2.5},
            {name: 'Beginner Terrain', score: 2.9},
            {name: 'Intermediate Terrain', score: 3.7},
            {name: 'Advanced Terrain', score: 4.7},
            {name: 'Terrain Parks', score: 3.7}
        ]
    };


    resortTable = [];
    newResortTable = {
        "Overall Rating": '',
        "Lifts": '',
        "Passes": '',
        "Side Country Access": '',
        "Snow": '',
        // "Terrain Breakdown": {
        //     green: '',
        //     blue: '',
        //     black: '',
        //     extreme: ''
        // },
        "Terrain Parks": '',
        "Ticket Prices": '',
        "Trails": '',
        "Skiable Acres": ''
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
                    this.newResortTable["Overall Rating"] = responseData[resort].overallRating;
                    this.newResortTable["Lifts"] = responseData[resort].lifts;
                    this.newResortTable["Passes"] = responseData[resort].passes;
                    this.newResortTable["Side Country Access"] = responseData[resort].sideCountryAccess;
                    this.newResortTable["Snow"] = responseData[resort].snow;
                    // this.newResortTable["Terrain Breakdown"] = responseData[resort].terrainBreakdown;
                    this.newResortTable["Terrain Parks"] = responseData[resort].terrainParks;
                    this.newResortTable["Ticket Prices"] = responseData[resort].ticketPrices;
                    this.newResortTable["Trails"] = responseData[resort].trails;
                    this.newResortTable["Skiable Acres"] = responseData[resort].vertical;
                    console.log('review progress', this.reviewProgress);
                }
            }
        });
    }

    getScoreBarWidth(score) {
        const percent = (score / 5) * 100;
        return percent + '%';
    }
    // terrainBreakdown() {
    //     return `${this.newResortTable.terrainBreakdown.green} green ${this.newResortTable.terrainBreakdown.blue} blue ${this.newResortTable.terrainBreakdown.black}
    //      black ${this.newResortTable.terrainBreakdown.extreme} extreme`;
    // }
}

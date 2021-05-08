import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { ResortData } from '../../shared/resort-data.model';
import { Resort } from '../../shared/resort.model';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ResortsService } from 'src/app/services/resorts.service';

import { ResortRatings } from '../../shared/resort-ratings.model';


@Component({
    selector: 'app-resort-modal-info',
    templateUrl: './resort-modal-info.component.html',
    styleUrls: ['resort-modal-info.component.css']
})

export class ResortModalInfoComponent implements OnInit {
    @Input() id: string;
    @Input() resortData: any;
    @Input() ratings: ResortRatings;
    // resortInfo;
    // private resortInfo$: Observable<Resort>;
    @ViewChild('reviewProgressBar') reviewProgress: ElementRef;

    constructor(
        private reviewsService: ReviewsService,
        private resortsService: ResortsService, ) {
    }

    ngOnInit() {
        console.log(this.ratings, this.resortData);
        // this.ratings = this.reviewsService.getResortRatings(this.id);
        // this.resortInfo = this.
        // this.resortInfo$ = this.resortsService.getSelectedResortInfo(this.id);
        // console.log('this.resort info', this.resortInfo)
    };

    // retrieveResortInfo() {
    //     const url = 'https://powfish.firebaseio.com/resortData.json';
    //     this.http.get(
    //         url
    //     ).subscribe(responseData => {
    //         for (const resort in responseData) {
    //             if (responseData[resort].id === this.id) {
    //                 this.newResortTable["Overall Rating"] = responseData[resort].overallRating;
    //                 this.newResortTable["Lifts"] = responseData[resort].lifts;
    //                 this.newResortTable["Passes"] = responseData[resort].passes;
    //                 this.newResortTable["Side Country Access"] = responseData[resort].sideCountryAccess;
    //                 this.newResortTable["Snow"] = responseData[resort].snow;
    //                 // this.newResortTable["Terrain Breakdown"] = responseData[resort].terrainBreakdown;
    //                 this.newResortTable["Terrain Parks"] = responseData[resort].terrainParks;
    //                 this.newResortTable["Ticket Prices"] = responseData[resort].ticketPrices;
    //                 this.newResortTable["Trails"] = responseData[resort].trails;
    //                 this.newResortTable["Skiable Acres"] = responseData[resort].vertical;
    //                 console.log('review progress', this.reviewProgress);
    //             }
    //         }
    //     });
    // }

    getStyleForBar(score) {
        return score >= 4 ? '#27ae60' : score < 2 ? '#e74c3c' : '#f1c40f';
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

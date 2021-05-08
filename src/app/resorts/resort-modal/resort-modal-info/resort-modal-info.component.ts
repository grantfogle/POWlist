import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResortData } from '../../shared/resort-data.model';
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
    @Input() resortData: ResortData;
    @Input() ratings: ResortRatings;
    @ViewChild('reviewProgressBar') reviewProgress: ElementRef;

    constructor(
        private reviewsService: ReviewsService,
        private resortsService: ResortsService, ) {
    }

    ngOnInit() {
    };

    getStyleForBar(score) {
        return score >= 4 ? '#27ae60' : score < 2 ? '#e74c3c' : '#f1c40f';
    }

    getScoreBarWidth(score) {
        const percent = (score / 5) * 100;
        return percent + '%';
    }

    // create a new chart green blue black double black and a bar that represents each
    // terrainBreakdown() {
    //     return `${this.newResortTable.terrainBreakdown.green} green ${this.newResortTable.terrainBreakdown.blue} blue ${this.newResortTable.terrainBreakdown.black}
    //      black ${this.newResortTable.terrainBreakdown.extreme} extreme`;
    // }
}

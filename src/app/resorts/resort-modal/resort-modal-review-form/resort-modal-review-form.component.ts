import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ReviewsService } from '../../../services/reviews.service';
import { ResortReview } from '../../shared/resort-review.model'
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-resort-modal-review-form',
    templateUrl: './resort-modal-review-form.component.html',
    styleUrls: ['resort-modal-review-form.component.css']
})

export class ResortModalReviewFormComponent {
    @Input() name: string;
    @Input() id: string;
    @ViewChild('reviewCaptureForm') reviewForm: NgForm;
    @Output() closeReviewForm = new EventEmitter<string>();
    today = new Date().toString();
    // review: {id: string, category: string, score: number, count: 4}

    finalReview: ResortReview = {
        resortId: this.id,
        icon: '',
        date:  this.today,
        userName: '',
        review: '',
        overall: null,
        snow: null,
        value: null,
        begTerrain: null,
        intTerrain: null,
        bcAccess: null,
        nightlife: null,
        terrainParks: null,
        crowds: null
    };

    userName: string;
    resortReview: string;
    overallScore = 3;
    powScore: number;

    resortScore: number;
    terrainScore: number;
    valueScore: number;

    constructor(private reviewsService: ReviewsService) { }

    closeReview() {
        this.closeReviewForm.emit();
    }
    reviewQualityCheck() {
        console.log('looks good');
        // return true or false, throw err
    }
    onReviewSubmit() {
        this.reviewQualityCheck();
        console.log('cats', this.reviewForm);
        let reviewObj = {
            resortId: this.id,
            userName: this.userName,
            review: this.resortReview,
            overall: this.overallScore,
            powderRating: this.powScore,
            valueRating: this.valueScore,
            terrainRating: this.terrainScore
        }
        console.log(reviewObj);
        // this.reviewsService.submitReview(reviewObj);
    }
}

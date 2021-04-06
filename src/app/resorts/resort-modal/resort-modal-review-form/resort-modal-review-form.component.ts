import { Component, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { ReviewsService } from '../../../services/reviews.service';

@Component({
    selector: 'app-resort-modal-review-form',
    templateUrl: './resort-modal-review-form.component.html',
    styleUrls: ['resort-modal-review-form.component.css']
})

export class ResortModalReviewFormComponent implements OnInit {
    @Input() name: string;
    @Input() id: string;

    userName: string;
    resortReview: string;
    resortScore: number;
    powScore: number;
    terrainScore: number;
    valueScore: number;

    constructor(private reviewsService: ReviewsService) { }

    ngOnInit() { }

    @Output() closeReviewForm = new EventEmitter<string>();

    closeReview() {
        this.closeReviewForm.emit();
    }
    reviewQualityCheck() {
        console.log('looks good');
        // return true or false, throw err
    }
    submitReview() {
        this.reviewQualityCheck();
        console.log(this.resortReview);
        let reviewObj = {
            resortId: this.id,
            userName: this.userName,
            review: this.resortReview,
            overallRating: this.resortScore,
            powderRating: this.powScore,
            valueRating: this.valueScore,
            terrainRating: this.terrainScore
        }
        console.log(reviewObj);
        this.reviewsService.submitReview(reviewObj);
    }
}

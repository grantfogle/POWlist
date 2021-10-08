import { Component, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { ReviewsService } from '../../../services/reviews.service';
import { ResortReview } from '../../shared/resort-review.model'
import { ResortRatings } from '../../shared/resort-ratings.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-resort-modal-review-form',
    templateUrl: './resort-modal-review-form.component.html',
    styleUrls: ['resort-modal-review-form.component.css']
})

export class ResortModalReviewFormComponent implements OnInit {
    @Input() name: string;
    @Input() id: string;
    @Input() ratings;
    @Input() ratingId;

    @ViewChild('reviewCaptureForm') reviewForm: NgForm;
    @Output() closeReviewForm = new EventEmitter<string>();
    today = new Date().toString();

    resortCategories: ResortRatings = {
        resortId: this.id,
        overallRating: { label: 'Overall Rating', score: 0, count: 0 },
        reviewCategories: {
            snow: { label: 'Snow Quality', score: 0, count: 0 },
            value: { label: 'Resort Value', score: 0, count: 0 },
            nightLife: { label: 'Night Life', score: 0, count: 0 },
            crowds: { label: 'Crowds', score: 0, count: 0 },
            bcAccess: { label: 'BC/Sidecountry Access', score: 0, count: 0 },
            begTerrain: { label: 'Beginner Terrain', score: 0, count: 0 },
            intTerrain: { label: 'Intermediate Terrain', score: 0, count: 0 },
            advTerrain: { label: 'Advanced Terrain', score: 0, count: 0 },
            exTerrain: { label: 'Expert Terrain', score: 0, count: 0 },
            terrainParks: { label: 'Terrain Parks', score: 0, count: 0 }
        }
    };

    userReview: ResortReview = {
        resortId: '',
        icon: '',
        date: this.today,
        userName: '',
        review: '',
        overallRating: null
    };

    ngOnInit() { }

    constructor(private reviewsService: ReviewsService) {
    }

    closeReview() {
        this.closeReviewForm.emit();
    }

    onReviewSubmit() {
        this.userReview.resortId = this.id;
        let ratingPatchObj = new Object();
        let overallRating = {
            label: 'Overall Rating',
            count: (this.ratings.overallRating.count + 1),
            score: this.newRatingScore(this.ratings.overallRating.score, this.ratings.overallRating.count, this.userReview.overallRating),
        };
        for (const category in this.resortCategories.reviewCategories) {
            const categoryReviewScore = Number(this.resortCategories.reviewCategories[category].score);
            if (categoryReviewScore && categoryReviewScore > 0) {
                ratingPatchObj[category] = this.resortCategories.reviewCategories[category];
                ratingPatchObj[category].count = this.ratings.reviewCategories[category].count + 1;
                ratingPatchObj[category].score = this.newRatingScore(this.ratings.reviewCategories[category].score, categoryReviewScore, this.resortCategories.reviewCategories[category].score);
            } else {
                ratingPatchObj[category] = this.resortCategories.reviewCategories[category];
                ratingPatchObj[category].count = this.ratings.reviewCategories[category].count;
                ratingPatchObj[category].score = this.ratings.reviewCategories[category].score;
            }
        }
        const subReview = this.reviewsService.submitReview(this.userReview)
        this.reviewsService.submitResortRating(ratingPatchObj, this.ratingId, this.id, overallRating);

        if (subReview) {
            this.closeReview();
        }
    }

    newRatingScore(currentScore, currentCount, updatedScore): number {
        const currentAggScore = currentScore * currentCount;
        const newScore = (currentAggScore + Number(updatedScore)) / (currentCount + 1);
        return newScore;
    }
}

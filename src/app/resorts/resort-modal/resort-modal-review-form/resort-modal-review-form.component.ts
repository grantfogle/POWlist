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
        resortId: this.id,
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
        let finalPatchObj;
        // update count of existing object
        let ratingPatchObj = new Object();
        for (const category in this.resortCategories.reviewCategories) {
            const categoryReviewScore = Number(this.resortCategories.reviewCategories[category].score);
            if (categoryReviewScore && categoryReviewScore > 0) {
                ratingPatchObj[category] = this.resortCategories.reviewCategories[category];
                ratingPatchObj[category].count = this.ratings.reviewCategories[category].count++;
                ratingPatchObj[category].score = (categoryReviewScore + this.ratings.reviewCategories[category].score) / ratingPatchObj[category].count;
            } else {
                ratingPatchObj[category] = this.resortCategories.reviewCategories[category];
                ratingPatchObj[category].count = this.ratings.reviewCategories[category].count;
                ratingPatchObj[category].score = this.ratings.reviewCategories[category].score;
            }
        }
        console.log(this.ratings);
        // overallRating: {count: 1, label: 'Overall Rating', score: 4}
        // ratingId: "-RRb7z6UGKuGfKCLMZe7"
        // resortId: "-CAALSV
    }
}

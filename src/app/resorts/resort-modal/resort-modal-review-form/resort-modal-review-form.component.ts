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
    @Input() currentRatings;

    @ViewChild('reviewCaptureForm') reviewForm: NgForm;
    @Output() closeReviewForm = new EventEmitter<string>();
    today = new Date().toString();

    resortCategories: ResortRatings = {
        resortId: this.id,
        overallRating: { label: 'Snow Quality', score: null, count: 0 },
        reviewCategories: {
            snow: { label: 'Snow Quality', score: null, count: 0 },
            value: { label: 'Resort Value', score: null, count: 0 },
            nightLife: { label: 'Night Life', score: null, count: 0 },
            crowds: { label: 'Crowds', score: null, count: 0 },
            bcAccess: { label: 'BC/Sidecountry Access', score: null, count: 0 },
            begTerrain: { label: 'Beginner Terrain', score: null, count: 0 },
            intTerrain: { label: 'Intermediate Terrain', score: null, count: 0 },
            advTerrain: { label: 'Advanced Terrain', score: null, count: 0 },
            exTerrain: { label: 'Expert Terrain', score: null, count: 0 },
            terrainParks: { label: 'Terrain Parks', score: null, count: 0 }
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
        console.log('Review', this.userReview);
        console.log('Resort categories', this.resortCategories);
        // overall rating,
        // loop through resort categories and look for ratings greater than 0
        // create an obj for resort categories
        // create an obj for user review
        // 
        // 
        // get parent object
        let patchObj;
        for (const category in this.resortCategories.reviewCategories) {
            if (category['score'] > 0) {
                patchObj[category]['score'] = category['score'];
                patchObj[category]['count'] = 1
            }
            console.log(category);
        }
        // this.reviewsService.submitReview(this.userReview);
        // this.reviewsService.submitReviewCategories(this.resortCategories);
    }
}

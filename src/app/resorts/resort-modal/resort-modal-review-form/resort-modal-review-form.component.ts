import { Component, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { ReviewsService } from '../../../services/reviews.service';
import { ResortReview } from '../../shared/resort-review.model'
import { ResortCategories } from '../../shared/resort-category-review.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-resort-modal-review-form',
    templateUrl: './resort-modal-review-form.component.html',
    styleUrls: ['resort-modal-review-form.component.css']
})

export class ResortModalReviewFormComponent implements OnInit {
    @Input() name: string;
    @Input() id: string;

    @ViewChild('reviewCaptureForm') reviewForm: NgForm;
    @Output() closeReviewForm = new EventEmitter<string>();
    today = new Date().toString();

    resortCategories: ResortCategories = {
        resortId: this.id,
        reviewCategories: {
            snow: {label: 'Snow Quality', score: null},
            value: {label: 'Resort Value', score: null},
            nightLife: {label: 'Night Life', score: null},
            crowds: {label: 'Crowds', score: null},
            bcAccess: {label: 'BC/Sidecountry Access', score: null},
            begTerrain: {label: 'Beginner Terrain', score: null},
            intTerrain: {label: 'Intermediate Terrain', score: null},
            advTerrain: {label: 'Advanced Terrain', score: null},
            terrainParks: {label: 'Terrain Parks', score: null}
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

    ngOnInit(){
        console.log(this.id);
    }

    constructor(private reviewsService: ReviewsService) {
    }

    closeReview() {
        this.closeReviewForm.emit();
    }

    onReviewSubmit() {
        this.reviewsService.submitReview(this.userReview);
        this.reviewsService.submitReviewCategories(this.resortCategories);
    }
}

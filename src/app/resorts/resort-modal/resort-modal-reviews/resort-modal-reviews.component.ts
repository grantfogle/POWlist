import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReviewsService } from '../../../services/reviews.service';

@Component({
    selector: 'app-resort-modal-reviews',
    templateUrl: './resort-modal-reviews.component.html',
    styleUrls: ['resort-modal-reviews.component.css']
})

export class ResortModalReviewsComponent implements OnInit {
    @Input() id: string;
    @Input() name: string;
    reviews = [];

    constructor(public http: HttpClient, private reviewsService: ReviewsService) { }

    ngOnInit() {
        this.retrieveReviews();
    }

    retrieveReviews() {
        this.reviewsService.getResortReview(this.id).subscribe(response => {
            for (const review in response) {
                const reviewData = response[review];
                let resReview = {
                    user: reviewData.userName,
                    description: reviewData.review,
                    rating: reviewData.overallRating,
                    terrainScore: reviewData.terrainRating,
                    affordabilityScore: reviewData.valueRating,
                    snowScore: reviewData.powderRating,
                }
                this.reviews.push(resReview);
            }
        });
    }
}

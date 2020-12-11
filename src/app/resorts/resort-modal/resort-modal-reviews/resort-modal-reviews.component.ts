import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-resort-modal-reviews',
    templateUrl: './resort-modal-reviews.component.html',
    styleUrls: ['resort-modal-reviews.component.css']
})

export class ResortModalReviewsComponent implements OnInit {
    @Input() id: string;
    reviews = []

    constructor(public http: HttpClient) { }

    ngOnInit() {
        this.retrieveReviews()
    }

    retrieveReviews() {
        // check for empty fields, if empty fields throw an alert
        // set a timeout to show then hide alert
        const url = 'https://powfish.firebaseio.com/reviews.json';
        this.http.get(
            url
        ).subscribe(responseData => {
            for (const review in responseData) {
                if (responseData[review].resortId === this.id) {
                    let res = {
                        user: 'G money maker',
                        description: responseData[review].review,
                        ratingDate: 'January 14, 2020',
                        rating: responseData[review].overallRating
                    }
                    this.reviews.unshift(res);
                }
            }
        });
        return true;
    }
}

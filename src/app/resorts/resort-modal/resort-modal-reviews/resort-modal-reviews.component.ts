import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-resort-modal-reviews',
    templateUrl: './resort-modal-reviews.component.html',
    styleUrls: ['resort-modal-reviews.component.css']
})

export class ResortModalReviewsComponent implements OnInit {
    @Input() id: string;
    fbreviews = [];
    constructor(public http: HttpClient) { }

    ngOnInit() {
        //get reviews for product id
        this.retrieveReviews()
    }

    retrieveReviews() {
        // check for empty fields, if empty fields throw an alert
        // set a timeout to show then hide alert
        const url = 'https://powfish.firebaseio.com/reviews.json';
        this.http.get(
            url
        ).subscribe(responseData => {
            console.log(responseData);
            for (const review in responseData) {
                console.log('reeeeeview', responseData[review]);
                if (responseData[review].resortId === this.id) {
                    let res = {
                        user: 'G money maker',
                        description: responseData[review].review,
                        ratingDate: 'January 14, 2020',
                        rating: responseData[review].overallRating
                    }
                    this.reviews.unshift(res);
                }
                // if (rev.id)
            }
        });
        return true;
    }

    reviews = [
        { user: 'Grant  money', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', ratingDate: 'December 12, 2018', rating: 4 },
        { user: 'Grant  money', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', ratingDate: 'December 12, 2018', rating: 3 },
        { user: 'Grant  money', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', ratingDate: 'December 12, 2018', rating: 2 },
        { user: 'Grant  money', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', ratingDate: 'December 12, 2018', rating: 4 },
    ]
}

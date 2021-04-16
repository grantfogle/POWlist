import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResortReview } from '../resorts/shared/resort-review.model';
import { ResortRatings } from '../resorts/shared/resort-ratings.model'

@Injectable({ providedIn: 'root' })
export class ReviewsService {

    constructor(public http: HttpClient) { }

    private resortRatings: ResortRatings[] = [];
    public selectedResortRatings: ResortRatings[] = [];
    private url = 'https://powfish.firebaseio.com/ratings.json';

    private reviews: ResortReview[] = [];

    submitReview(review: ResortReview): boolean {
        const url = 'https://powfish.firebaseio.com/reviews.json';
        this.http.post(
            url,
            review
        ).subscribe(responseData => {
            console.log(responseData);
        });
        return true;
    }

    submitReviewCategories(resortCategories: ResortRatings): boolean {
        const url = 'https://powfish.firebase.com/categories.json';
        this.http.post(
            url,
            resortCategories
        ).subscribe(responseData => {
            console.log(responseData);
        });
        return true;
    }

    async submitUserFeedback(feedback) {
        const url = 'https://powfish.firebaseio.com/feedback.json';
        await this.http.post(
            url,
            feedback
        ).subscribe(responseData => {
            console.log(responseData);
        });
    }



    getResortRatings(id: string) {
        return this.resortRatings.filter(ratings => ratings.resortId === id);
    }

    fetchResortRatings() {
        console.log('dogs');
        this.http.get(this.url)
            .pipe(map(responseData => {
                const resArray = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        resArray.push({ ...responseData[key], id: key })
                    }
                }
                return resArray;
            })).subscribe(response => {
                this.resortRatings = response;
                console.log('aaaaaa', response);
            });;
    }

    // https://<myid>.firebaseio.com/todos.json?orderBy="id"&equalTo=26


    // retrieveResortReviews(id: string) {
    // const cors = 'https://cors-anywhere.herokuapp.com/'
    // const url = 'https://powfish.firebaseio.com/resorts.json';
    // this.http.get(url)
    //     .pipe(map(responseData => {
    //         console.log('asdfa', responseData);
    //         const resortsArray = [];
    //         for (const key in responseData) {
    //             if (responseData.hasOwnProperty(key)) {
    //                 resortsArray.push({ ...responseData[key], id: key })
    //             }
    //         }
    //         return resortsArray;
    //     }))
    //     .subscribe(response => {
    //         response.forEach(resort => {
    //             this.resorts.push(resort);
    //         })
    //         this.sortResortsByRating();
    //         console.log(response);
    //     })
    // console.log(this.resorts);
    // }
}
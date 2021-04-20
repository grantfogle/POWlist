import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResortReview } from '../resorts/shared/resort-review.model';
import { ResortRatings } from '../resorts/shared/resort-ratings.model'

@Injectable({ providedIn: 'root' })
export class ReviewsService {

    constructor(public http: HttpClient) { }

    public resortRatings: ResortRatings[] = [];
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



    addNewReview(resortId, review, ratings, currentRatings) {
        // for loop that checks for name of rating
        // ((review.count * score) + newRating / newCount)
        // {}

        // patch request for ratings
        // post request for reviews
    }

    // 
    getRandomNumberBetween1and5() {
        // getRand Number between 1 and 5
        return Math.floor(Math.random() * 5);

    }
    getMockRatings(resorts) {
        let mockResortRatingArr: ResortRatings[];
        // fetch all 52 resorts that we have;
        // create a mock review obj  

        for (let i = 0; i < resorts.length; i++) {
            let rating = {
                resortId: resorts[i].id,
                overallRating: {
                    count: 1,
                    label: 'Overall Rating',
                    score: this.getRandomNumberBetween1and5()
                },
                reviewCategories: {
                    begTerrain: {count: 1, label: 'Beginner Terrain', score: this.getRandomNumberBetween1and5()},
                    intTerrain: {count: 1, label: 'Intermediate Terrain', score: this.getRandomNumberBetween1and5()},
                    advTerrain: {count: 1, label: 'Advanced Terrain', score: this.getRandomNumberBetween1and5()},
                    exTerrain: {count: 1, label: 'Expert Terrain', score: this.getRandomNumberBetween1and5()},
                    bcAccess: {count: 1, label: 'BC/Sidecountry Access', score: this.getRandomNumberBetween1and5()},
                    crowds: {count: 1, label: 'Crowds', score: this.getRandomNumberBetween1and5()},
                    nightLife: {count: 1, label: 'Night Life', score: this.getRandomNumberBetween1and5()},
                    snow: {count: 1, label: 'Snow', score: this.getRandomNumberBetween1and5()},
                    terrainParks: {count: 1, label: 'Terrain Parks', score: this.getRandomNumberBetween1and5()},
                    value: {count: 1, label: 'Value', score: this.getRandomNumberBetween1and5()}
                }
            }
        }
    }
}
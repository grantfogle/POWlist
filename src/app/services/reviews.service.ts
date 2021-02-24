import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ResortReview } from '../resorts/shared/resort-review.model';

@Injectable({ providedIn: 'root' })
export class ReviewsService {

    constructor(public http: HttpClient) {
    }

    private reviews: ResortReview[] = [];

    submitReview(review: ResortReview) {
        const url = 'https://powfish.firebaseio.com/reviews.json';
        this.http.post(
            url,
            review
        ).subscribe(responseData => {
            console.log(responseData);
        });
    }

    filterBySkiPass(pass: string) {
        // let filterArr = this.resorts.filter(resort => resort.skiPasses === pass);
        // console.log('it worked', filterArr);
        // this.filteredResorts = filterArr;
    }

    retrieveResortReviews(id: string) {
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
    }
}
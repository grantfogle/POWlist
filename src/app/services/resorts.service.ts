import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment as ENV } from '../../environments/environment';
import { Endpoints } from '../shared/endpoints';

import { FilterService } from './filter.service';
import { ReviewsService } from './reviews.service';
import { ResortData } from '../resorts/shared/resort-data.model';
import { Resort } from '../resorts/shared/resort.model';
import { resolveComponentResources } from '@angular/core/src/metadata/resource_loading';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResortsService {

    constructor(private filterService: FilterService,
        public reviewsService: ReviewsService,
        public http: HttpClient) {
        // this.sortResortsByRating();
    }

    private resorts: ResortData[];
    public filteredResorts: Resort[];
    public resortsAndRatings: Resort[];
    // resortsObservable$: Observable<Resort[]>;

    // getAllResorts() {
    //     this.filteredResorts = this.resortsAndRatings;
        // this.filteredResorts = this.resortsAndRatings;
    //     return this.filteredResorts;
    // }

    getSelectedResortInfo(id: string) {
        return this.resorts.filter(resort => {
            for (const key in resort) {
                console.log('key', resort);
            }
        });
    }

    // sortResortsByRating() {
        // let filterArr = this.resorts.forEach(resort => {
        // });
        // let ratings = this.resorts.sort((a, b) => b.rating - a.rating)
    // }

    // getResortsByName(filterWord: string) {
    //     let filterArr = this.resorts.filter(resort => {
    //         let name = resort.name.toLowerCase().indexOf(filterWord);
    //         let country = resort.country.toLowerCase().indexOf(filterWord);
    //         let region = resort.city.toLowerCase().indexOf(filterWord);
    //         if (name !== -1 || country !== -1 || region !== -1) {
    //             return resort;
    //         }
    //     })
    //     this.filteredResorts = filterArr;
    // }

    // filterBySkiPass(pass: string) {
    //     let filterArr = this.resorts.filter(resort => resort.stats.skiPasses.value === pass);
    //     this.filteredResorts = filterArr;
    // }

    // resetResorts() {
    //     this.filteredResorts = this.resorts;
    //     this.sortResortsByRating();
    // }

    retrieveResorts() {
        const url = `${ENV.POWLIST_CONNECT_URL}${Endpoints.RESORTS}`;
        return this.http.get<ResortData[]>(url)
            .pipe(map(responseData => {
                const resortsArray = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        resortsArray.push({ ...responseData[key], id: key })
                    }
                }
                return resortsArray;
            }));
    }

    retrieveResortsFromDb() {
        const url = `${ENV.POWLIST_CONNECT_URL}${Endpoints.RESORTS}`;
        this.http.get(url)
            .pipe(map(responseData => {
                const resortsArray = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        resortsArray.push({ ...responseData[key], id: key })
                    }
                }
                return resortsArray;
            }))
            .subscribe(response => {
                this.resorts = response;
                this.combineResortsAndRatings();
            })
    }

    combineResortsAndRatings() {
        let arr = [];
        if (this.resorts.length > 1 && this.reviewsService.resortRatings.length > 1) {
            this.resorts.forEach(resort => {
                const filteredRating = this.reviewsService.resortRatings.filter(rating => rating.resortId === resort.id)[0];
                const resortAndRatingObj: Resort = {
                    resortData: resort,
                    resortReviews: filteredRating
                }
                arr.push(resortAndRatingObj);
            })
            this.resortsAndRatings = arr;
        }
    }

    mergeResortsAndRatings(resortList, ratings) {
        let arr = [];
        if (resortList > 1 && ratings.length > 1) {
            resortList.forEach(resort => {
                const filteredRating = ratings.filter(rating => rating.resortId === resort.id)[0];
                const resortAndRatingObj: Resort = {
                    resortData: resort,
                    resortReviews: filteredRating
                }
                arr.push(resortAndRatingObj);
            })
            return arr;
            // this.resortsAndRatings = arr;
        }
    }

    getResortsAndRatings() {
        return this.resortsAndRatings;
    }

    // filterResortsBySnowfall() {
    //     let resortsOrderBySnow = this.resorts.sort((a, b) => b.stats.snowPerYearInInches.value - a.stats.snowPerYearInInches.value);
    //     this.filteredResorts = resortsOrderBySnow;
    // }

    // filterByResortAffordability() {
    //     let resortsOrderByPrice = this.resorts.sort((a, b) => a.stats.adultFullDayTicketInUSD.value - b.stats.adultFullDayTicketInUSD.value);
    //     this.filteredResorts = resortsOrderByPrice;
    // }

    addResort(resort: ResortData) {
        const url = `${ENV.POWLIST_CONNECT_URL}${Endpoints.NEW_RESORT}`;
        this.http.post(
            url,
            resort
        ).subscribe(responseData => {
            console.log(responseData);
        });
    }

    // filterResortByWord(searchTerm: string): ResortData[] {
    //     let filterArr = this.resorts.filter(resort => {
    //         let name = resort.name.toLowerCase().indexOf(searchTerm);
    //         let country = resort.country.toLowerCase().indexOf(searchTerm);
    //         let region = resort.city.toLowerCase().indexOf(searchTerm);
    //         if (name !== -1 || country !== -1 || region !== -1) {
    //             return resort;
    //         }
    //     });
    //     return filterArr;
    // };

}
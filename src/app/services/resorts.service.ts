import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { environment as ENV } from '../../environments/environment';
import { Endpoints } from '../shared/endpoints';
import { FilterService } from './filter.service';
import { ReviewsService } from './reviews.service';
import { ResortData } from '../resorts/shared/resort-data.model';
import { Resort } from '../resorts/shared/resort.model';
import { resolveComponentResources } from '@angular/core/src/metadata/resource_loading';
import { Observable, forkJoin } from 'rxjs';
import { ResortRatings } from '../resorts/shared/resort-ratings.model';

@Injectable({ providedIn: 'root' })
export class ResortsService {

    constructor(private filterService: FilterService,
        public reviewsService: ReviewsService,
        public http: HttpClient) {
    }

    private resorts$: Observable<Resort[]> = this.loadAllResortsAndRatings();
    public filteredResorts: Resort[];
    public resortsAndRatings: Resort[];
    public selectedResort: Resort;

    // getAllResorts() {
    //     this.filteredResorts = this.resortsAndRatings;
    // this.filteredResorts = this.resortsAndRatings;
    //     return this.filteredResorts;
    // }

    getSelectedResortInfo(id: string): Observable<Resort> {
        return this.resorts$
            .pipe(
                map(resorts => resorts.filter(resort => resort.resortData.id === id)[0]
                )
            );
    }

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
    //filter by all categories
    // filter by terrain (green, blue, black, extreme)
    // rework other filters to include this, so itd just be one function
    // filter by nightlife
    // filter by 
    // filterBy(category: string) {
    //     arr.sort(resort.[category] => resort[category] - resort[category])
    // }

    loadAllResortsAndRatings(): Observable<Resort[]> {
        let resortsObj: Resort[] = [];
        const url = `${ENV.POWLIST_CONNECT_URL}${Endpoints.RESORTS}`;
        const resortDataRetrieved$ = this.retrieveResorts();
        const ratingsRetrieved$ = this.reviewsService.retrieveRatings();
        const resortsAndRatingsObj$ = forkJoin([resortDataRetrieved$, ratingsRetrieved$])
            .pipe(
                map(res => {
                    const combinedArr = this.combineResortsAndRatings(res[0], res[1])
                    return combinedArr;
                }),
                shareReplay())
        return resortsAndRatingsObj$
            .pipe(
                map(resorts => resorts.sort((a: any, b: any) => b.resortReviews.overallRating.score - a.resortReviews.overallRating.score)
                )
            );
        // .subscribe(asdf => console.log(asdf));
        // return resortsAndRatingsObj$;
    }

    retrieveResorts(): Observable<ResortData[]> {
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

    // retrieveResortsFromDb() {
    //     const url = `${ENV.POWLIST_CONNECT_URL}${Endpoints.RESORTS}`;
    //     this.http.get(url)
    //         .pipe(map(responseData => {
    //             const resortsArray = [];
    //             for (const key in responseData) {
    //                 if (responseData.hasOwnProperty(key)) {
    //                     resortsArray.push({ ...responseData[key], id: key })
    //                 }
    //             }
    //             return resortsArray;
    //         }),
    //             shareReplay())
    //         .subscribe(response => {
    // this.resorts = response;
    // this.combineResortsAndRatings();
    //         })
    // }

    combineResortsAndRatings(resortArr: ResortData[], ratingsArr: ResortRatings[]): Resort[] {
        let arr = [];
        resortArr.forEach(resort => {
            const filteredRating = ratingsArr.filter(rating => rating.resortId === resort.id)[0];
            const resortAndRatingObj: Resort = {
                resortData: resort,
                resortReviews: filteredRating
            }
            arr.push(resortAndRatingObj);
        })
        return arr;
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
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { FilterService } from './filter.service';
import { Resort, Resort2 } from '../resorts/shared/resort.model';

@Injectable({ providedIn: 'root' })
export class ResortsService {

    constructor(private filterService: FilterService,
        public http: HttpClient) {
        this.sortResortsByRating();
        this.filteredResorts = this.resorts;
    }

    private resorts: Resort[] = [];
    public filteredResorts: Resort[];

    getAllResorts() {
        this.filteredResorts = this.resorts;
        console.log(this.resorts);
        return this.filteredResorts;
    }

    getSelectedResortInfo(id: string) {
        this.resorts.filter(resort => console.log('reasdfasf', resort));
    }

    sortResortsByRating() {
        let ratings = this.resorts.sort((a, b) => b.rating - a.rating)
    }

    getResortsByName(filterWord: string) {
        let filterArr = this.resorts.filter(resort => {
            let name = resort.name.toLowerCase().indexOf(filterWord);
            let country = resort.country.toLowerCase().indexOf(filterWord);
            let region = resort.city.toLowerCase().indexOf(filterWord);
            if (name !== -1 || country !== -1 || region !== -1) {
                return resort;
            }
        })
        this.filteredResorts = filterArr;
    }

    filterBySkiPass(pass: string) {
        let filterArr = this.resorts.filter(resort => resort.skiPasses === pass);
        this.filteredResorts = filterArr;
    }

    resetResorts() {
        this.filteredResorts = this.resorts;
        this.sortResortsByRating();
    }
    retrieveResortsFromDb() {
        const url = 'https://powfish.firebaseio.com/resorts.json';
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
                response.forEach(resort => {
                    this.resorts.push(resort);
                })
                this.sortResortsByRating();
            })
    }

    filterResortsBySnowfall() {
        let resortsOrderBySnow = this.resorts.sort((a, b) => b.snowInInches - a.snowInInches);
        this.filteredResorts = resortsOrderBySnow;
    }

    filterByResortAffordability() {
        let resortsOrderByPrice = this.resorts.sort((a, b) => a.liftPassCost - b.liftPassCost);
        this.filteredResorts = resortsOrderByPrice;
    }

    addResort(resort: Resort2) {
        const url = 'https://powfish.firebaseio.com/new-resort.json';
            this.http.post(
            url,
            resort
      ).subscribe(responseData => {
        console.log(responseData);
      });
    }

}
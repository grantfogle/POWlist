import { Injectable } from '@angular/core';
import { ResortData } from '../resorts/shared/resort-data.model';
import { ResortsService } from './resorts.service';
import { Resort } from '../resorts/shared/resort.model';

@Injectable({ providedIn: 'root' })
export class FilterService {
    passFilter = '';
    searchFilter = '';
    powderFilterEngaged = false;
    valueFilterEngaged = false;
    // default filter
    // filterByRating(resortList: Resort[]) {    
    //     return resortList.filter(resort => a > b );
    // }
    constructor() { }
    // filterBySnowfall(resorts: Resort[]) {}
    filterByGeo(term: string) { }
    filterByExtremeTerrain() { }
    filterByFamilyFriendly() { }
    // filterByAffordability() { }
    filterByResorts() { }
    filterByName() { }

    filterResortByWord(resorts: Resort[],  searchTerm: string): Resort[] {
        let filterArr = resorts.filter(resort => {
            let name = resort.resortData.name.toLowerCase().indexOf(searchTerm);
            let country = resort.resortData.country.toLowerCase().indexOf(searchTerm);
            let region = resort.resortData.city.toLowerCase().indexOf(searchTerm);
            if (name !== -1 || country !== -1 || region !== -1) {
                return resort;
            }
        });
        return filterArr;
    };

    filterByPass(resorts: Resort[], skiPass: string): Resort[] {
        let retFilterArr = resorts.filter(resort => {
            let resortPass = resort.resortData.stats.skiPasses.value;
            if (skiPass === '') {
                return resort;
            } else if (resortPass && resortPass.includes(skiPass)) {
                return resort;
            }
        });
        return retFilterArr;
    }

    filterByPowder(resorts: Resort[]) {
        let sortedPowderScoreArr = resorts.sort((a: any, b: any) => {
            console.log(a.resortReviews, b.resortReviews);
            return b.resortReviews.reviewCategories.snow.score - a.resortReviews.reviewCategories.snow.score
        });
        console.log(sortedPowderScoreArr);
        return sortedPowderScoreArr;
    }

    filterByValue(resorts: Resort[]) {
        let sortedValueScoreArr = resorts.sort((a: any, b: any) => {
            console.log(a.resortReviews, b.resortReviews);
            return b.resortReviews.reviewCategories.value.score - a.resortReviews.reviewCategories.value.score
        });
        return sortedValueScoreArr;
    }

    clearOneFilter(filterName) { }
    clearAllFilters() { }
    // removeAllFilters() {
    //     console.log('cats');
    //     console.log(this.resortsService.resorts)
    //     this.resortsService.filteredResorts = this.resortsService.resorts;
    // }
}
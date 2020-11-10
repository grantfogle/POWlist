import { Injectable } from '@angular/core';
import { Resort } from '../resorts/shared/resort.model';
import { ResortsService } from './resorts.service';

@Injectable({providedIn: 'root'})
export class FilterService {
    // default filter
    // filterByRating(resortList: Resort[]) {    
    //     return resortList.filter(resort => a > b );
    // }
    constructor() {}
    // filterBySnowfall(resorts: Resort[]) {}
    filterByGeo(term: string) {}
    filterByExtremeTerrain() {}
    filterByFamilyFriendly() {}
    filterByAffordability() {}
    filterByResorts() {}

    // removeAllFilters() {
    //     console.log('cats');
    //     console.log(this.resortsService.resorts)
    //     this.resortsService.filteredResorts = this.resortsService.resorts;
    // }
}
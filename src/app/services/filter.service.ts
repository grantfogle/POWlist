import { Injectable } from '@angular/core';
import { Resort } from '../resorts/shared/resort.model';

@Injectable({providedIn: 'root'})
export class FilterService {
    // default filter
    // filterByRating(resortList: Resort[]) {    
    //     return resortList.filter(resort => a > b );
    // }

    filterBySnowfall() {}
    filterByExtremeTerrain() {}
    filterByFamilyFriendly() {}
    filterByAffordability() {}
    filterByResorts() {}
}
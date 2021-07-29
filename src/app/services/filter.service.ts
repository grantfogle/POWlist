import { Injectable } from '@angular/core';
import { ResortData } from '../resorts/shared/resort-data.model';
import { ResortsService } from './resorts.service';

@Injectable({ providedIn: 'root' })
export class FilterService {
    constructor() { }
    // filterBySnowfall(resorts: Resort[]) {}
    filterByGeo(term: string) { }
    filterByExtremeTerrain() { }
    filterByFamilyFriendly() { }
    filterByAffordability() { }
    filterByResorts() { }
    filterByName() { }

    // removeAllFilters() {
    //     console.log('cats');
    //     console.log(this.resortsService.resorts)
    //     this.resortsService.filteredResorts = this.resortsService.resorts;
    // }
}
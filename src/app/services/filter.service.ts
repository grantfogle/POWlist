import { Injectable } from '@angular/core';
import { ResortData } from '../resorts/shared/resort-data.model';
import { Observable } from 'rxjs';
import { ResortsService } from './resorts.service';
import { Resort } from '../resorts/shared/resort.model';

@Injectable({ providedIn: 'root' })
export class FilterService {
    constructor() { }

    // filterByGeo(term: string, resorts: Resort[]) {
    //     return resorts.filter();
    // }
    filterByExtremeTerrain() { }
    filterByFamilyFriendly() { }
    filterByAffordability() { }
    filterByResorts() { }

    filterByName(resortList: any, filterWord: string): Resort[] {
        // console.log(resortList)
        console.log(resortList)
        const filterArr = resortList.filter(resort => {
            let name = resort.resortData.name.toLowerCase().indexOf(filterWord);
            let country = resort.resortData.country.toLowerCase().indexOf(filterWord);
            let region = resort.resortData.city.toLowerCase().indexOf(filterWord);
            if (name !== -1 || country !== -1 || region !== -1) {
                return resort;
            }
        });
        // this.filteredResorts = filterArr;
        // const filResorts = resortList.filter(resort => resort.resortData.name.includes(name));
        return filterArr;
    }

    // removeAllFilters() {
    //     console.log('cats');
    //     console.log(this.resortsService.resorts)
    //     this.resortsService.filteredResorts = this.resortsService.resorts;
    // }
}
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
        return this.filteredResorts;
    }

    getSelectedResortInfo(id: string) {
        return this.resorts.filter(resort => {
            if (resort[0] === id) {
                console.log('catasssss')
            }
            for (const key in resort) {
                console.log('key', resort);
            }
        });
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
        // const url = 'https://powfish.firebaseio.com/resorts.json';
        // uncomment to get correct daata
        const url = 'https://powfish.firebaseio.com/resorts3.json';
        this.http.get(url)
            .pipe(map(responseData => {
                const resortsArray = [];
                console.log('responsoe dataaaaaa', responseData);
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
        // this.getNewJsonDataForGraph();
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
        console.log('added resort', resort);
        const url = 'https://powfish.firebaseio.com/new-resort.json';
        this.http.post(
            url,
            resort
        ).subscribe(responseData => {
            console.log(responseData);
        });
    }

    filterResortByWord(searchTerm: string): Resort[] {
        let filterArr = this.resorts.filter(resort => {
            let name = resort.name.toLowerCase().indexOf(searchTerm);
            let country = resort.country.toLowerCase().indexOf(searchTerm);
            let region = resort.city.toLowerCase().indexOf(searchTerm);
            if (name !== -1 || country !== -1 || region !== -1) {
                return resort;
            }
        });
        return filterArr;
    };

    /**************
    
    GETTING NEW FORMATTED DATA (WILL DELETE)
    
    ***************/

    // getNewJsonDataForGraph() {
    //     let newResortInfo = [];
    //     // for (const key in resort) {
    //     let finalArr = [];
    //     const url = 'https://powfish.firebaseio.com/resorts.json';
    //     const urlResortInfo = 'https://powfish.firebaseio.com/resortData.json';
    //     // const url = 'https://powfish.firebaseio.com/resort2.json';
    //     // 1) GET ALL RESORTS
    //     // this.http.get(url)
    //     //     .pipe(map(responseData => {
    //     //         const resortsArray = [];
    //     //         console.log('getnewjson data', responseData);
    //     //         for (const key in responseData) {
    //     //             if (responseData.hasOwnProperty(key)) {
    //     //                 resortsArray.push({ ...responseData[key], id: key })
    //     //             }
    //     //         }
    //     //         return resortsArray;
    //     //     }))
    //     //     .subscribe(response => {
    //     //         response.forEach(resort => {
    //     //             newResorts.push(resort);
    //     //         })
    //     //     })

    //     // 2) GET ALL RESORTINFO
    //     this.http.get(urlResortInfo)
    //         .pipe(map(responseData => {
    //             const resortsArray = [];
    //             console.log('get resort data', responseData);
    //             for (const key in responseData) {
    //                 if (responseData.hasOwnProperty(key)) {
    //                     resortsArray.push({ ...responseData[key], name: key })
    //                 }
    //             }
    //             return resortsArray;
    //         }))
    //         .subscribe(response => {
    //             response.forEach(resort => {
    //                 newResortInfo.push(resort);
    //             });
    //             console.log('asdfasdfasfdasf', this.filteredResorts, newResortInfo);
    //             this.getJsonFormatted(this.filteredResorts, newResortInfo);
    //             // for (let i = 0; i < this.filteredResorts.length; i++) {
    //             //     console.log('cats');
    //             // for (const key in this.filteredResorts[i]) {
    //             //     console.log(key)
    //             // [key]: {
    //             //     name: key.name,
    //             // } 
    //         });

    //     // 3) Combine them into a new array that's convverted into a json
    //     // JSON.stringify(obj)
    // }

    // getJsonFormatted(resortData, resortInfo) {
    //     console.log('get formatted json:', resortData);
    //     console.log('get formatted json:', resortInfo);
    //     let arr = [];

    //     resortData.forEach(resort => {
    //         let obj = {};
    //         resortInfo.forEach(info => {
    //             if (info.id === resort.id) {
    //                 obj = {
    //                     [resort.id]: {
    //                         name: resort.name,
    //                         city: resort.city,
    //                         province: resort.province,
    //                         country: resort.country,
    //                         latitude: '',
    //                         longitude: '',
    //                         website: '',
    //                         description: resort.description,
    //                         coverImage: resort.imagePath,
    //                         logo: '',
    //                         cardImage: '',
    //                         stats: {
    //                             adultFullDayTicketInUSD: { label: 'Adult 1 Day Ticket', value: info.ticketPrices },
    //                             bestTimeToVisit: { label: 'Best Time to Visit', value: '' },
    //                             bikePark: { label: 'Bike Park?', value: '' },
    //                             lifts: { label: 'Lifts', value: info.lifts },
    //                             nearestAirportInMiles: { label: 'Nearest Airport (miles)', value: '' },
    //                             skiableAcres: { label: 'Skiable Acres', value: info.skiableAcres },
    //                             skiPasses: { label: 'Ski Passes', value: [resort.skiPasses] },
    //                             sideCountryAccess: { label: 'BC/Sidecountry Access', value: '' },
    //                             snowPerYearInInches: { label: 'Snow per Year (inches)', value: info.snow },
    //                             terrainParks: { label: 'Terrain Parks?', value: info.terrainParks },
    //                             trails: { label: 'Trails', value: info.trails },
    //                             verticalFeet: { label: 'Vertical Feet', value: info.vertical },
    //                         },
    //                         terrainBreakdown: {
    //                             advTerrainPercentage: { label: 'Advanced Terrain Percentage', value: info.terrainBreakdown.black },
    //                             begTerrainPercentage: { label: 'Beginner Terrain Percentage', value: info.terrainBreakdown.green },
    //                             intTerrainPercentage: { label: 'Intermediate Terrain Percentage', value: info.terrainBreakdown.blue },
    //                             exTerrainPercentage: { label: 'Expert Terrain Percentage', value: info.terrainBreakdown.extreme }
    //                         }
    //                     }
    //                 }
    //             }
    //         })
    //         arr.push(obj);
    //     })

    //     console.log('ojbbbbjjjj', JSON.stringify(arr));
    //     // console.log('edited array brah', arr);
    //     // for (const key in resortData) {
    //     //     console.log('asdfaf resort data', resortData);
    //     //     if (resortData.hasOwnProperty(key)) {
    //     //         arr.push({ ...resortData[key], id: key });
    //     //     }
    //     // }
    //     // console.log('arr', arr);
    // }

}
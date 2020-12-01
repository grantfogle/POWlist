import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { FilterService } from './filter.service';
import { Resort } from '../resorts/shared/resort.model';

@Injectable({ providedIn: 'root' })
export class ResortsService {

    constructor(private filterService: FilterService,
        public http: HttpClient) {
        this.sortResortsByRating();
        this.filteredResorts = this.resorts;
    }

    private resorts: Resort[] = [
        // new Resort('Alta', 'Little Cottonwood Canyon', 'Utah', 'USA', 4.3, 'Ski Utah\'s top resort, averages 500 inches of snow a year', 'https://escape2ski.com/wp-content/uploads/2020/06/138-102-Alta-Ski-Area-UT.jpg', 'Ikon', '502'),
        // new Resort('Snowbird', 'Little Cottonwood Canyon', 'Utah', 'USA', 4.7, 'Ski one of utahs top resorts, averages 300 inches of snow per year', 'https://upload.wikimedia.org/wikipedia/commons/6/68/Snowbird_Tram_at_Hidden_Peak.jpg', 'Ikon', '480'),
        // new Resort('Steamboat', 'Steamboat Springs', 'Colorado', 'USA', 4.6, 'Champagne powder abounds at this tree skiing paradise.', 'https://img6.onthesnow.com/image/xl/73/73931.jpg', 'Epic', '350'),
        // new Resort('Keystone', 'Summit County', 'Colorado', 'USA', 4.2, 'Top terrain park in the country', 'https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/Keystone/Overview/Keystone-12.jpg', 'Epic', '350'),
        // new Resort('Niseko', 'Niseko', 'Hokkaido', 'Japan', 4.0, 'Powder lovers rejoice.', 'https://i0.wp.com/www.agoda.com/wp-content/uploads/2019/12/Grand-Hirafu-Niseko-Village-ski-resort-things-to-do-in-Niseko-Japan.jpg?ssl=1', 'Ikon', '400'),
        // new Resort('Happo Ono', 'Hakuba', 'Hakuba', 'Japan', 4.0, 'Powder lovers rejoice.', 'https://www.hakuba1.com/english/wp-content/uploads/2015/11/Happo_1.jpg', 'Ikon', '400'),
        // new Resort('Jackson Hole', 'Jackson', 'Wyoming', 'USA', 4.0, 'Big badass skiing.', 'https://cdn.jacksonholenet.com/images/content/14620_G6OZl_Jackson_Hole_Ski_Resorts_lg.jpg', 'Ikon', '400'),
        // new Resort('Big Sky', 'Big Sky', 'Montana', 'USA', 4.0, 'Big badass skiing.', 'https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/BigSky/Overview/11.jpg', 'Ikon', '400'),
        // new Resort('Mt Rose', 'Tahoe', 'Nevada', 'USA', 4.4, 'Big badass skiing, close to cool ass town in Reno.', 'https://s.hdnux.com/photos/01/11/12/06/19177906/7/gallery_medium.jpg', 'Ikon', '400'),
        // new Resort('Copper Mountain', 'Summit County', 'Colorado', 'USA', 4.2, 'Family friendly skiing, great terrain park', 'https://www.coloradormr.com/custimages/Website%20Pages/Winter%20Activities/CopperMountainWinter.png', 'Ikon', '400'),
    ];
    //     this.name = name;
    //     this.city = city;
    //     this.province = province;
    //     this.country = country;
    //     this.rating = rating;
    //     this.description = description;
    //     this.imagePath = imagePath;
    //     this.skiPasses = skiPasses;
    //     this.snowInInches = snowInInches;
    public filteredResorts: Resort[];

    getAllResorts() {
        this.filteredResorts = this.resorts;
        return this.filteredResorts;
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
        console.log('it worked', filterArr);
        this.filteredResorts = filterArr;
    }

    retrieveResortsFromDb() {
        // const cors = 'https://cors-anywhere.herokuapp.com/'
        const url = 'https://powfish.firebaseio.com/resorts.json';
        this.http.get(url)
            .pipe(map(responseData => {
                console.log('asdfa', responseData);
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
                console.log(response);
            })
    }
}
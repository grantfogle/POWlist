import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { interval, Subscription, Observable } from 'rxjs';

import { Resort } from './shared/resort.model';
import { ResortModalComponent } from './resort-modal/resort-modal.component';
import { ModalService } from '../services/modal.service';
import { ReviewsService } from '../services/reviews.service';
import { ResortsService } from '../services/resorts.service';
import { compileBaseDefFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css'],
  providers: [ResortsService]
})
export class ResortsComponent implements OnInit, OnDestroy {
  showAddResortForm = false;
  showFeedbackForm = false;
  resorts: Resort[];
  @Input() displayResorts: Resort[];

  private observableSub: Subscription;

  constructor(public modalService: ModalService,
    public resortsService: ResortsService,
    public reviewsService: ReviewsService,
    public http: HttpClient) {
      this.resortsService.retrieveResortsFromDb();
      this.reviewsService.fetchResortRatings();
      this.resorts = this.resortsService.getAllResorts();
      this.displayResorts = this.resortsService.filteredResorts;
      console.log(this.displayResorts);
  }

  initResortModal(resortData) {
    let outputs = {
      resort: resortData
    }
    this.modalService.init(ResortModalComponent, {}, outputs);
  }

  ngOnInit() {
    // const customIntervalObservable = Observable.create(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     if (count === 2) {
    //       observer.complete();
    //     }
    //     if (count > 3) {
    //       observer.error(new Error('Count is greater than 3!'));
    //     }
    //     count++;
    //   }, 1000);
    // });

    // this.observableSub = customIntervalObservable.pipe(filter(data => {
    //   return data > 0;
    // }), map((data: number) => {
    //   return 'Round: ' + (data + 1);
    // })).subscribe(data => {
    //   console.log(data);
    // }, error => {
    //   console.log(error);
    //   alert(error.message);
    // }, () => {
    //   console.log('completed');
    // });
  }

  ngOnDestroy() {
    this.observableSub.unsubscribe();
  }

  toggleAddResortForm() {
    this.showAddResortForm = !this.showAddResortForm;
    this.showFeedbackForm = false;
  }
  toggleFeedbackForm() {
    this.showFeedbackForm = !this.showFeedbackForm;
    this.showAddResortForm = false;
  }

  addResort(resort: Resort) {
    this.resorts.push(resort);
  }

  filterResorts(filterWord: string) {
    // get full resort filters brahhh
    // this.
    this.displayResorts = this.resortsService.filterResortByWord(filterWord.toLowerCase());

    // let filterArr = this.resorts.filter(resort => {
    //   let name = resort.name.toLowerCase().indexOf(filterWord);
    //   let country = resort.country.toLowerCase().indexOf(filterWord);
    //   let region = resort.city.toLowerCase().indexOf(filterWord);
    //   if (name !== -1 || country !== -1 || region !== -1) {
    //     return resort;
    //   }
    // })
    // this.displayResorts = filterArr;
  }

  filterResortsByPass(pass: string) {
    this.resortsService.filterBySkiPass(pass);
    this.displayResorts = this.resortsService.filteredResorts;
  }

  resetResortFilters() {
    this.resortsService.resetResorts();
    this.displayResorts = this.resortsService.filteredResorts;
  }

  filterResortsForPowder() {
    this.resortsService.filterResortsBySnowfall();
    this.displayResorts = this.resortsService.filteredResorts;
  }

  filterByPrice() {
    this.resortsService.filterByResortAffordability();
    this.displayResorts = this.resortsService.filteredResorts;
  }

}

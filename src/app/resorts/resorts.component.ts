import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Resort } from './shared/resort.model';
import { ResortModalComponent } from './resort-modal/resort-modal.component';
import { ModalService } from '../services/modal.service';
import { ReviewsService } from '../services/reviews.service';
import { ResortsService } from '../services/resorts.service';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css'],
  providers: [ResortsService]
})
export class ResortsComponent implements OnInit {
  showAddResortForm = false;
  showFeedbackForm = false;
  allResorts: Resort[] = [];
  displayResortsSub: Subscription;
  displayResorts: Resort[] = [];

  constructor(
    public modalService: ModalService,
    public resortsService: ResortsService,
    public reviewsService: ReviewsService,
    private filterService: FilterService) { }

  initResortModal(resortData) {
    let outputs = {
      resort: resortData
    }
    this.modalService.init(ResortModalComponent, {}, outputs);
  }

  ngOnInit() {
    this.resortsService.loadAllResortsAndRatings();
    this.displayResortsSub = this.resortsService.loadAllResortsAndRatings().subscribe(resorts => {
      this.allResorts = resorts;
      this.displayResorts = resorts;
      return resorts;
    });
  }

  toggleAddResortForm() {
    this.showAddResortForm = !this.showAddResortForm;
    this.showFeedbackForm = false;
  }

  toggleFeedbackForm() {
    this.showFeedbackForm = !this.showFeedbackForm;
    this.showAddResortForm = false;
  }
  filterResorts($event) {
    console.log($event);
    this.resortsService.getResortsByName($event);
  }

  searchFilterResorts($event) {
    this.displayResorts = this.filterService.filterResortByWord(this.allResorts, $event);
  }

  passFilter($event) {
    this.displayResorts = this.filterService.filterByPass(this.allResorts, $event);
  }

  resetResortFilters() {
    this.displayResorts = this.allResorts;
  }

  filterResortsForPowder() {
    this.displayResorts = this.filterService.filterByPowder(this.displayResorts);
  }

  filterByPrice() {
    this.displayResorts = this.filterService.filterByValue(this.displayResorts);
  }

}
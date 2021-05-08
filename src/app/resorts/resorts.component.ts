import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Resort } from './shared/resort.model';
import { ResortModalComponent } from './resort-modal/resort-modal.component';
import { ModalService } from '../services/modal.service';
import { ReviewsService } from '../services/reviews.service';
import { ResortsService } from '../services/resorts.service';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css'],
  providers: [ResortsService]
})
export class ResortsComponent implements OnInit {
  showAddResortForm = false;
  showFeedbackForm = false;
  displayResorts$: Observable<Resort[]>;

  constructor(
    public modalService: ModalService,
    public resortsService: ResortsService,
    public reviewsService: ReviewsService) { }

  initResortModal(resortData) {
    let outputs = {
      resort: resortData
    }
    this.modalService.init(ResortModalComponent, {}, outputs);
  }

  ngOnInit() {
    this.resortsService.loadAllResortsAndRatings();
    this.displayResorts$ = this.resortsService.loadAllResortsAndRatings();
  }

  toggleAddResortForm() {
    this.showAddResortForm = !this.showAddResortForm;
    this.showFeedbackForm = false;
  }

  toggleFeedbackForm() {
    this.showFeedbackForm = !this.showFeedbackForm;
    this.showAddResortForm = false;
  }

}
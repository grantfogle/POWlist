import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ResortData } from '../shared/resort-data.model';
import { Resort } from '../shared/resort.model';

@Component({
    selector: 'app-resort-modal',
    templateUrl: './resort-modal.component.html',
    styleUrls: ['resort-modal.component.css']
})

export class ResortModalComponent implements OnInit {
    selectedNav = 'Info';
    showReviewForm = false;
    selectedResort: Resort;

    constructor(
        public modalService: ModalService,
        public reviewsService: ReviewsService) {
    }

    ngOnInit() {
        this.selectedResort = this.modalService.selectedResort.resort;
    }

    handleModalNavigation(term: string) {
        this.selectedNav = term;
    }

    toggleReviewForm() {
        this.showReviewForm = !this.showReviewForm;
    }

    close() {
        this.modalService.destroy();
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Resort } from '../shared/resort.model';

@Component({
    selector: 'app-resort-modal',
    templateUrl: './resort-modal.component.html',
    styleUrls: ['resort-modal.component.css']
})

export class ResortModalComponent implements OnInit {
    constructor(public modalService: ModalService) {
    }

    ngOnInit() {
        this.selectedResort = this.modalService.selectedResort.resort;
    }

    selectedNav = 'Info';
    showReviewForm = false;
    selectedResort: any;
    // resort: any;

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

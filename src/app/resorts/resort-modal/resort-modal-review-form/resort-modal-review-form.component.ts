import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-resort-modal-review-form',
    templateUrl: './resort-modal-review-form.component.html',
    styleUrls: ['resort-modal-review-form.component.css']
})

export class ResortModalReviewFormComponent {
    constructor() {
    }
    @Input() resortName: string;
    @Input() resortId: string;
    reviewDescription: string;
    resortScore: number;
    powScore: number;
    terrainScore: number;
    valueScore: number;

    @Output() closeReviewForm = new EventEmitter<string>();
    // close() {
    //     this.modalService.destroy();
    // }
    closeReview() {
        console.log('cats');
        this.closeReviewForm.emit();
    }
}

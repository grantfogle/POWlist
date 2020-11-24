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
    resortReviewDescription: string;
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
    reviewQualityCheck() {
        console.log('looks good');
    }
    submitReview() {
        console.log(this.resortReviewDescription);
        let reviewObj = {
            review: this.resortReviewDescription,
            totalRating: this.resortScore,
            powRating: this.powScore,
            valueRating: this.valueScore,
            terrainRating: this.terrainScore
        }
        console.log(reviewObj);
    }
}

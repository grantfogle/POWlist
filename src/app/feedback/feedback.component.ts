import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {
    showFeedbackForm = false;
    showFeedbackThanks = false;
    feedbackEmail: string = '';
    feedbackMessage: string = '';

    constructor() { }

    ngOnInit() {
    }

    toggleFeedbackForm() {
        this.showFeedbackForm = !this.showFeedbackForm;
    }

    feedbackThanks() {
        this.showFeedbackThanks = true;
        setTimeout(() => {
            this.showFeedbackThanks = false;
        }, 4500);
    }

    submitFeedback() {
        console.log(this.feedbackEmail);
        console.log(this.feedbackMessage);
    }

}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-feedback-form',
    templateUrl: './feedback-form.component.html',
    styleUrls: ['./feedback-form.component.css']
})

export class FeedbackFormComponent {
    email: string = '';
    feedback: string = '';
    displayFormFail = false;
    formSuccess = false;

    constructor(public http: HttpClient) { }

    resetForm() {
        this.email = '';
        this.feedback = '';
    }

    checkForEmptyFields(): boolean {
        if (!this.email || !this.feedback) {
            return false;
        }
        return true;
    }

    submitFeedback() {
        const fieldsFilled = this.checkForEmptyFields();
        if (fieldsFilled) {
            const url = 'https://powfish.firebaseio.com/feedback.json';
            let feedbackObj = {
                email: this.email,
                feedback: this.feedback
            }
            this.http.post(
                url,
                feedbackObj
            ).subscribe(responseData => {
                this.displayFormFail = false;
                this.formSuccess = true;
                console.log(responseData);
            });
        } else {
            this.displayFormFail = true;
            setTimeout(() => {
                this.displayFormFail = false;
            }, 4500);
            console.log('Please fill all required fields');
        }
    }
}

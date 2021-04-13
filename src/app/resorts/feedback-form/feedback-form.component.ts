import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ReviewsService } from '../../services/reviews.service';

@Component({
    selector: 'app-feedback-form',
    templateUrl: './feedback-form.component.html',
    styleUrls: ['./feedback-form.component.css']
})

export class FeedbackFormComponent implements OnInit {
    displayFormFail = false;
    formSuccess = false;
    feedbackForm: FormGroup;
    forbiddenEmails = ['gmoney@gmail.com', 'cats@gmail.com'];
    @Output() closeFeedbackForm = new EventEmitter();

    constructor(public http: HttpClient, public reviewsService: ReviewsService) { }

    ngOnInit() {
        this.feedbackForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'feedback': new FormControl(null, Validators.required)
            // 'hobbies': new FormArray([])
        });
    }

    // onAddHobby() {
    //     const control = new FormControl(null);
    //     (<FormArray>this.feedbackForm.get('hobbies')).push(control);
    // }

    // getforbiddenEmails(control: FormControl): {[s: string]: boolean} {
    //     if (this.forbiddenEmails.indexOf(control.value) !== -1) {
    //         return {'nameIsForbidden': true};
    //     }
    //     return null;
    // }

    onCloseFeedbackForm() {
        this.closeFeedbackForm.emit();
    }
    
    async submitFeedback() {
        if (this.feedbackForm.valid) {
            await this.reviewsService.submitUserFeedback(this.feedbackForm.value);
            this.displayFormFail = false;
            this.formSuccess = true;
        }
    }
}

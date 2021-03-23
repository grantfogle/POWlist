import {
    Component,
    OnInit,
    EventEmitter,
    Output
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-feedback-form',
    templateUrl: './feedback-form.component.html',
    styleUrls: ['./feedback-form.component.css']
})

export class FeedbackFormComponent implements OnInit {
    email: string = '';
    feedback: string = '';
    @Output() closeModal = new EventEmitter();

    constructor(public http: HttpClient) { }

    ngOnInit() { }

    submitForm() { }
    resetForm() {
        this.email = '';
        this.feedback = '';

        this.closeModal.emit();
    }
    checkForEmptyFields(): boolean {
        if (this.email !== '' && this.feedback) {
            return true;
        }
        return false;
    }

    onCreateResort() {
        const fieldsFilled = this.checkForEmptyFields();
        if (fieldsFilled) {
            const url = 'https://powfish.firebaseio.com/feedback.json';
            let resorts = {
                email: this.email,
                feedback: this.feedback
            }
            this.http.post(
                url,
                resorts
            ).subscribe(responseData => {
                console.log(responseData);
            });
        } else {
            console.log('Please fill all required fields');
        }
    }
}

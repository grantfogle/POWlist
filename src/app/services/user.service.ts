import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class UserService {
    subscribed = false;
    constructor(public http: HttpClient) {
    }

    emailSubscribe(email: string) {
        const sendObj = { email };
        const url = 'https://powfish.firebaseio.com/emailList.json';
        this.http.post(
            url,
            sendObj
        ).subscribe(responseData => {
            if (responseData) {
                this.subscribed = true;
            }
            console.log(responseData);
        });
    }
}
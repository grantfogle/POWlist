import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  email: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  emailSubscribe(email: string) {
    const url = 'https://powfish.firebaseio.com/emails.json';
    this.http.post(
      url,
      email
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

}

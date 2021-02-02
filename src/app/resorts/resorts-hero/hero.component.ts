import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  email: string;
  constructor() { }

  ngOnInit() {
  }

  emailSubscribe(email: string) {
    console.log(email);
  }

}

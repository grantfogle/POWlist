import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  email: string;
  displayThankyou = false;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  async emailSubscribe() {
    await this.userService.emailSubscribe(this.email);
    this.email = '';
    this.displayThankyou = true;
  }

}

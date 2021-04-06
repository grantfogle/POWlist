import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  email: string;
  displayThankyou = false;
  @ViewChild('emailCapture') emailCaptureForm: NgForm; 

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  onFormSubmit() {
    console.log(this.emailCaptureForm);
  }
  // onFormSubmit(form: NgForm) {
  //   console.log(form);
  // }

  async emailSubscribe() {
    await this.userService.emailSubscribe(this.email);
    this.email = '';
    this.displayThankyou = true;
  }

}

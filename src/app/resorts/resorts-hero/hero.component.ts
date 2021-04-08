import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  email: string;
  displayThankyou = false;
  @ViewChild('emailCapture') emailCaptureForm: NgForm;

  constructor(public userService: UserService) { }

  async onFormSubmit() {
    await this.userService.emailSubscribe(this.email);
    this.email = '';
    this.displayThankyou = true;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Resort } from '../shared/resort.model';

@Component({
  selector: 'app-resort-card',
  templateUrl: './resort-card.component.html',
  styleUrls: ['./resort-card.component.css']
})

export class ResortCardComponent implements OnInit {
  showAddResortForm = false;
  @Input() resort: Resort;

  constructor() { 

    console.log(this.resort);
  }

  ngOnInit() {
  }

}

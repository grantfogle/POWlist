import { Component, Input } from '@angular/core';
import { ResortData } from '../shared/resort-data.model';

@Component({
  selector: 'app-resort-card',
  templateUrl: './resort-card.component.html',
  styleUrls: ['./resort-card.component.css']
})

export class ResortCardComponent {
  @Input() resort: ResortData;
  // @Input() ratings: ResortReviews;
  @Input() rank;

  getResortCardBorder() {
    let resortBorderClass = '';
    if (this.resort.stats.skiPasses.value[0]) {
      resortBorderClass += this.resort.stats.skiPasses.value[0];
    }
    return resortBorderClass;
  }

  constructor() { }
}

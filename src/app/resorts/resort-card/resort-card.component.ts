import { Component, Input } from '@angular/core';
import { ResortData } from '../shared/resort-data.model';

@Component({
  selector: 'app-resort-card',
  templateUrl: './resort-card.component.html',
  styleUrls: ['./resort-card.component.css']
})

export class ResortCardComponent {
  showAddResortForm = false;
  @Input() resort: ResortData;
  @Input() rank;

  getResortCardBorder() {
    let resortBorderClass = '';
    if (this.resort.stats.skiPasses.value[0]) {
      resortBorderClass += this.resort.stats.skiPasses.value[0];
    }
    return resortBorderClass;
    // return border;
    // '`ngClass]="resort.stats.skiPasses.value[0] ? 'resort-card-container-border-' + resort.stats.skiPasses.value[0] : ''"`
    // if (this.resortCard.stats.skiPasses.value.length > 0) {
    // }
  }

  constructor() {
  } 
}

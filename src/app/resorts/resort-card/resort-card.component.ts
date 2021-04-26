import { Component, Input } from '@angular/core';
import { Resort} from '../shared/resort.model';

@Component({
  selector: 'app-resort-card',
  templateUrl: './resort-card.component.html',
  styleUrls: ['./resort-card.component.css']
})

export class ResortCardComponent {
  showAddResortForm = false;
  @Input() resort: Resort;
  @Input() rank;

  getResortCardBorder() {
    let resortBorderClass = '';
    if (this.resort.resortData.stats.skiPasses.value[0]) {
      resortBorderClass += this.resort.resortData.stats.skiPasses.value[0];
    }
    return resortBorderClass;
    // return border;
    // '`ngClass]="resort.stats.skiPasses.value[0] ? 'resort-card-container-border-' + resort.stats.skiPasses.value[0] : ''"`
    // if (this.resortCard.stats.skiPasses.value.length > 0) {
    // }
  }

  constructor() {
    console.log(this.resort);
  } 
}

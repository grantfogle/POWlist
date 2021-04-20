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

  constructor() {
  } 
}

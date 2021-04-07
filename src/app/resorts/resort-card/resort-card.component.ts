import { Component, Input } from '@angular/core';
import { Resort } from '../shared/resort.model';

@Component({
  selector: 'app-resort-card',
  templateUrl: './resort-card.component.html',
  styleUrls: ['./resort-card.component.css']
})

export class ResortCardComponent {
  showAddResortForm = false;
  @Input() resort: Resort;
  @Input() rank;

  constructor() {
  } 
}

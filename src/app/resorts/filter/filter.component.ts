import {
  Component,
  OnInit,
  OnChanges,
  ViewChild,
  ElementRef,
  SimpleChanges,
  EventEmitter,
  Output
} from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { ResortsService } from '../../services/resorts.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit, OnChanges {
  @ViewChild('filterInput') filterInput: ElementRef;
  @Output() filterResortsByText = new EventEmitter<string>();
  @Output() filterResortsByPass = new EventEmitter<string>();
  @Output() ikonFilterSelected = new EventEmitter<boolean>();
  @Output() resetResortFilter = new EventEmitter<any>();
  @Output() filterByPowder = new EventEmitter();
  @Output() filterByAffordability = new EventEmitter();
  @Output() filterResortsByOther = new EventEmitter<string>();
  @Output() resetFilters = new EventEmitter<any>();

  displayFilters = false;
  passSelected = '';
  otherFilterSelected = '';

  constructor(public filterService: FilterService, public resortsService: ResortsService) { }

  ngOnChanges(changes: SimpleChanges) { }

  ngOnInit() { }

  onSearchFilter() {
    console.log(this.filterInput.nativeElement.value);
    this.filterResortsByText.emit(this.filterInput.nativeElement.value);
  }

  selectPassFilter(pass: string) {
    if (this.passSelected !== pass) {
      this.passSelected = pass;
      this.filterResortsByPass.emit(pass);
    } else {
      this.passSelected = '';
      this.clearFilters();
    }
  }

  filterByValue() {
    if (this.otherFilterSelected !== 'Affordability') {
      this.otherFilterSelected = 'Affordability';
      this.filterByAffordability.emit();
    } else {
      this.otherFilterSelected = '';
      this.resetFilters.emit();
    }
  }

  filterBySnow() {
    if (this.otherFilterSelected !== 'Snowfall') {
      this.otherFilterSelected = 'Snowfall';
      this.filterByPowder.emit();
    } else {
      this.otherFilterSelected = '';
      this.resetFilters.emit();
    }
  }

  toggleFilterView() {
    this.displayFilters = !this.displayFilters;
  }

  clearFilters() {
    this.passSelected = '';
    this.otherFilterSelected = '';
    this.resetFilters.emit();
  }
}

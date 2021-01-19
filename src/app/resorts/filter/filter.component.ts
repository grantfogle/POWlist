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
  @Output() filterResorts = new EventEmitter<string>();
  @Output() filterResortsByPass = new EventEmitter<string>();
  @Output() ikonFilterSelected = new EventEmitter<boolean>();
  @Output() resetResortFilter = new EventEmitter<any>();
  @Output() filterBySnowTotals = new EventEmitter();
  @Output() filterResortsByOther = new EventEmitter<string>();
  @Output() resetFilters = new EventEmitter<any>();

  displayFilters = false;
  passSelected = '';
  otherFilterSelected = '';

  constructor(public filterService: FilterService, public resortsService: ResortsService) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('something was changed');
  }

  ngOnInit() { }

  onSearchFilter() {
    this.filterResorts.emit(this.filterInput.nativeElement.value);
  }

  selectPassFilter(pass: string) {
    if (this.passSelected !== pass) {
      this.passSelected = pass;
      this.filterResortsByPass.emit(pass);
    } else {
      console.log('1: else statement ran');
      this.passSelected = '';
      this.resetResortFilter.emit(pass);
    }
  }

  filterByOther(other: string) {
    if (this.otherFilterSelected !== other) {
      this.otherFilterSelected = other;
      this.filterResortsByOther.emit(other);
    } else {
      // this.resetResortFilter.emit(true);
      this.otherFilterSelected = '';
    }
  }

  filterBySnowfall() {
    console.log('show resorts with most snowfall');
    this.filterBySnowTotals.emit();
  }

  filterByAffordability() {
    console.log('show resorts with most snowfall');
  }

  toggleFilterView(name) {
    this.displayFilters = !this.displayFilters;
  }

  clearFilters(event) {
    console.log('tasdfasdfasfd', event);
    this.resetFilters.emit(event);
    // show all resorts
    // this.filterService.removeAllFilters();
  }
}

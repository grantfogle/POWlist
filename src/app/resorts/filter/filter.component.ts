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
  @Output() filterBySnowTotals = new EventEmitter();
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

  filterByOther(other: string) {
    if (this.otherFilterSelected !== other) {
      this.otherFilterSelected = other;
      this.filterResortsByOther.emit(other);
    } else {
      // this.resetResortFilter.emit(true);
      this.otherFilterSelected = '';
    }
  }

  toggleFilterView() {
    this.displayFilters = !this.displayFilters;
  }

  clearFilters() {
    console.log('clear filter fired');
    this.resetFilters.emit();
  }
}

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
  @Output() resetResortFilter = new EventEmitter();
  @Output() filterBySnowTotals = new EventEmitter();
  @Output() filterResortsByOther = new EventEmitter<string>();

  displayFilters = false;
  passSelected = '';
  familyFriendly = false;
  otherFilterSelected = '';
  // powder = false;
  // bigMtn = false;
  // affordable = false;
  filters = [];

  constructor(public filterService: FilterService, public resortsService: ResortsService) {
    // console.log('Contructor called');
  }

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
      this.resetResortFilter.emit();
      this.passSelected = '';
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

  filterByPasses(pass) {
    this.resortsService.filterBySkiPass(pass);
    console.log(pass);
  }

  toggleFilterView(name) {
    this.displayFilters = !this.displayFilters;
  }

  clearFilter() {

    console.log('tasdfasdfasfd');
    // show all resorts
    // this.filterService.removeAllFilters();
  }
}

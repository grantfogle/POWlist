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
// filterBySkiPass()
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit, OnChanges {
  @ViewChild('filterInput') filterInput: ElementRef;
  @Output() filterResorts = new EventEmitter<string>();
  @Output() ikonFilterSelected = new EventEmitter<boolean>();
  @Output() passFilterSelected = new EventEmitter<string>();
  @Output() filterBySnowTotals = new EventEmitter();
  displayFilters = false;
  ikon = false;
  epic = false;
  mtnCollective = false;
  familyFriendly = false;
  powder = false;
  bigMtn = false;
  affordable = false;
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

  selectIkon() {
    this.ikon = !this.ikon;
    this.epic = false;
    this.mtnCollective = false;
    if (this.ikon) {
      this.ikonFilterSelected.emit(true);
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

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
  displayFilters = false;
  ikon = false;
  epic = false;
  mtnCollective = false;
  familyFriendly = false;
  powder = false;
  bigMtn = false;
  affordable = false;
  filters = [];
  
  constructor(public filterService: FilterService) {
    // console.log('Contructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('something was changed');
  }

  ngOnInit() {
    console.log('ng on init called');
  }

  onSearchFilter() {
    console.log('cats');
    console.log(this.filterInput.nativeElement.value);
    this.filterResorts.emit(this.filterInput.nativeElement.value);
  }

  selectIkon() {
    console.log('ikon selected')
    this.ikon = !this.ikon;
    if (this.ikon) {
      this.ikonFilterSelected.emit(true);
    }
  }

  filterByPasses(pass) {
    console.log(pass);
    if (pass === 'Mtn Collective') {
      this.epic = false;
      this.ikon = false;
      this.mtnCollective = !this.mtnCollective;
      if (this.mtnCollective) {
        this.passFilterSelected.emit(pass);
      }
    } else if (pass === 'Ikon') {
      this.epic = false;
      this.ikon = !this.ikon;
      this.mtnCollective = false;
      if (this.ikon) {
        this.passFilterSelected.emit(pass);
      }
    } else if (pass === 'Epic') {
      this.epic = !this.epic;
      this.ikon = false;
      this.mtnCollective = false;
      if (this.epic) {
        this.passFilterSelected.emit(pass);
      } 
      // else {
      //   resetPassFilter
      // }
    }
  }

  toggleFilterView(name) {
    console.log('asdfasdfasdf')
    this.displayFilters = !this.displayFilters;
  }

  clearFilter() {
    console.log('tasdfasdfasfd');
    this.filterService.removeAllFilters();
  }
}

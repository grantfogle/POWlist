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

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit, OnChanges {
  @ViewChild('filterInput') filterInput: ElementRef;
  @Output() filterResorts = new EventEmitter<string>();
  displayFilters = false;
  ikonSelected = true;
  
  constructor() {
    console.log('Contructor called');
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

  toggleFilterView() {
    console.log('asdfasdfasdf')
    this.displayFilters = !this.displayFilters;
  }
}

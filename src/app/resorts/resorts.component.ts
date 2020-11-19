import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Resort } from './shared/resort.model';
import { ResortModalComponent } from './resort-modal/resort-modal.component';
import { ModalService } from '../services/modal.service';
import { ResortsService } from '../services/resorts.service';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css'],
  providers: [ResortsService]
})
export class ResortsComponent implements OnInit {
  showAddResortForm = false;
  resorts: Resort[];
  @Input() displayResorts: Resort[];

  constructor(public modalService: ModalService,
    public resortsService: ResortsService,
    public http: HttpClient) {

    this.resorts = this.resortsService.getAllResorts();
    this.displayResorts = this.resortsService.filteredResorts;
  }

  initResortModal(resortData) {
    let outputs = {
      resort: resortData
    }
    this.modalService.init(ResortModalComponent, {}, outputs);
  }

  ngOnInit() {
    this.fetchResorts();
  }

  toggleAddResortForm() {
    this.showAddResortForm = !this.showAddResortForm;
  }

  addResort(resort: Resort) {
    console.log('cats');
    this.resorts.push(resort);
    // this.displayResorts.push(resort);
  }

  filterResorts(filterWord: string) {
    let filterArr = this.resorts.filter(resort => {
      let name = resort.name.toLowerCase().indexOf(filterWord);
      let country = resort.country.toLowerCase().indexOf(filterWord);
      let region = resort.city.toLowerCase().indexOf(filterWord);
      if (name !== -1 || country !== -1 || region !== -1) {
        return resort;
      }
    })
    this.displayResorts = filterArr;
  }

  filterResortsByPass(pass: string) {
    let filterArr = this.resorts.filter(resort => resort.skiPasses === pass);
    this.displayResorts = filterArr;
  }

  filterResortsForIkon() {
    let filterArr = this.resorts.filter(resort => resort.skiPasses === 'Ikon');
    this.displayResorts = filterArr;
  }

  filterResortsForPowder() {
    this.displayResorts.sort()
  }

  private fetchResorts() {
    console.log('called');
    // const cors = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://powfish.firebaseio.com/resorts.json';
    this.http.get(url)
      .pipe(map(responseData => {
        console.log('asdfa', responseData);
        const resortsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            resortsArray.push({ ...responseData[key], id: key })
          }
        }
        return resortsArray;
      }))
      .subscribe(response => {
        console.log(response);
      })
  }
}

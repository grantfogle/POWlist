import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Resort } from '../shared/resort.model';

@Component({
    selector: 'app-resort-modal',
    templateUrl:'./resort-modal.component.html',
    styleUrls: ['resort-modal.component.css']
})

export class ResortModalComponent {
    constructor(public modalService: ModalService) {
    }
    resortName = 'Alta';
    resortTable= [
        {name:'Rating', data: '4.4'},
        {name: 'Snow', data: '400 inches'},
        {name: 'Passes', data: 'Ikon'},
        {name: 'Ticket Prices', data: '$130'},
        {name: 'Terrain Breakdown', data:'20% green, 40% blue, 20% black/double black'},
        {name: 'Ticket Prices', data: '$130'},
        {name: 'Lifts', data: '12 (4 double chairs, 4 quads, 2 gondolas)'},
        {name: 'Side Country Access', data: 'Yes'},
        {name: 'Passes', data: 'Crowded'},
    ]
    close() {
        this.modalService.destroy();
    }
}

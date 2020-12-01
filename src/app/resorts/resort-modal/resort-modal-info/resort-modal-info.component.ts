import { Component } from '@angular/core';
import { Resort } from '../../shared/resort.model';

@Component({
    selector: 'app-resort-modal-info',
    templateUrl: './resort-modal-info.component.html',
    styleUrls: ['resort-modal-info.component.css']
})

export class ResortModalInfoComponent {
    resortTable = [
        { name: 'Rating', data: '4.4' },
        { name: 'Snow', data: '400 inches' },
        { name: 'Passes', data: 'Ikon' },
        { name: 'Ticket Prices', data: '$130' },
        { name: 'Terrain Breakdown', data: '20% green, 40% blue, 20% black/double black' },
        { name: 'Ticket Prices', data: '$130' },
        { name: 'Lifts', data: '12 (4 double chairs, 4 quads, 2 gondolas)' },
        { name: 'Side Country Access', data: 'Yes' },
        { name: 'Passes', data: 'Crowded' },
    ];

    constructor() { }

    ngOnInit() {
    }
}

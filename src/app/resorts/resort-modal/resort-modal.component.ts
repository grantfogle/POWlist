import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
    selector: 'app-resort-modal',
    templateUrl:'./resort-modal.component.html',
    styleUrls: ['resort-modal.component.css']
})

export class ResortModalComponent {
    constructor(public modalService: ModalService) {}
    
    close() {
        this.modalService.destroy();
    }
}

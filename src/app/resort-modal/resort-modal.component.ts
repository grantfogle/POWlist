import { Component } from '@angular/core';
// import { ModalService } from 'services/modal.service';

@Component({
    selector: 'app-resort-modal',
    templateUrl:'./app-resort-modal.component.html',
    styleUrls: ['app-resort-modal.component.css']
})

export class ModalComponent {
    constructor() {}
    
    public close() {
        this.modalService.destroy();
    }
}

import { Injectable } from '@angular/core';
import { DomService } from './dom.service';
import { ResortData } from '../resorts/shared/resort-data.model';
import { Resort } from '../resorts/shared/resort.model';

@Injectable({ providedIn: 'root' })
export class ModalService {
    constructor(private domService: DomService) { }

    private modalElementId = 'modal-container';
    private overlayElementId = 'overlay';
    public selectedResort: any;

    init(component: any, inputs: object, outputs: object) {
        let componentConfig = {
            inputs: inputs,
            outputs: outputs
        }
        this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
        this.selectedResort = outputs;
        document.getElementById(this.modalElementId).className = 'show';
        document.getElementById(this.overlayElementId).className = 'show';
    }

    destroy() {
        this.domService.removeComponent();
        this.selectedResort = '';
        document.getElementById(this.modalElementId).className = 'hidden';
        document.getElementById(this.overlayElementId).className = 'hidden';
    }
}
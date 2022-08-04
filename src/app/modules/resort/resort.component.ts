import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-resort',
    templateUrl: './resort.component.html',
    providers: []
})

export class ResortComponent implements OnInit {
    resort: { id: string };

    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        console.log('cats');
        this.resort = this.route.snapshot.params['id'];
    }


}
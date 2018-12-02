import {Component} from '@angular/core';

@Component({
    selector: 'pedal-card',
    templateUrl: './pedal-card.component.html',
    styleUrls: ['./pedal-card.component.scss']
})
export class PedalCardComponent {

    name: string;
    manufacturerName: string;
    previewUrl: string;

    constructor() {
        this.name = 'dummy';
        this.manufacturerName = 'dummyManufacturer';
        this.previewUrl = 'https://picsum.photos/200';
    }
}
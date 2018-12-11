import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'pedal-card',
    templateUrl: './pedal-card.component.html',
    styleUrls: ['./pedal-card.component.scss']
})
export class PedalCardComponent {

    name: string;
    manufacturerName: string;
    previewUrl: string;
    types: string[];

    constructor() {
    }

    @Input() pedal;

    ngOnInit() {
        this.name = this.pedal.name || 'Unnamed';
        this.manufacturerName = this.pedal.manufacturer || 'Unknown';
        this.previewUrl = this.pedal.previewUrl || 'https://picsum.photos/200';
        this.types = this.pedal.types;
    }
}
import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    @Input() pedal;

    ngOnInit() {
        this.name = this.pedal.name || 'Unnamed';
        this.manufacturerName = this.pedal.manufacturer || 'Unknown';
        this.previewUrl = this.pedal.previewUrl || 'https://picsum.photos/200';
        this.types = Array.isArray(this.pedal.tags) ?  this.pedal.tags : [];
    }

    onSelectPedal() {
        this.router.navigate(['details/' + this.pedal.key], {relativeTo: this.route});
    }
}
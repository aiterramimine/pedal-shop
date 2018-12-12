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
    pictureUrl: string;
    types: string[];

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    @Input() pedal;

    ngOnInit() {
        this.name = this.pedal.name || 'Unnamed';
        this.manufacturerName = this.pedal.manufacturer || 'Unknown manufacturer';
        this.pictureUrl = (this.pedal.pictureUrl ? this.pedal.pictureUrl : 'https://picsum.photos/200');
        this.types = Array.isArray(this.pedal.tags) ?  this.pedal.tags : [];
    }

    onSelectPedal() {
        this.router.navigate(['details/' + this.pedal.key], {relativeTo: this.route});
    }
}
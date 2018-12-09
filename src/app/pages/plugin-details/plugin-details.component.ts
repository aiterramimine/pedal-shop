import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * This is the home page component.
 */
@Component({
  selector: 'plugin-details',
  templateUrl: './plugin-details.component.html',
  styleUrls: ['./plugin-details.component.scss']
})
export class PluginDetailsComponent {

    id: string;
    previewUrl: string;
    types: string[];

    constructor(private activatedRoute: ActivatedRoute) {
        this.id = this.activatedRoute.snapshot.params['id'];
        this.previewUrl = 'https://picsum.photos/400';
        this.types = ['Instrument', 'Guitare'];
    }

}

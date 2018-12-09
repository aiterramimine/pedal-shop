import { Component } from '@angular/core';

/**
 * This is the home page component.
 */
@Component({
  selector: 'plugin-creation',
  templateUrl: './plugin-creation.component.html',
  styleUrls: ['./plugin-creation.component.scss']
})
export class PluginCreationComponent {

    title: string;
    author: string;
    repoLink: string;
    description: string;
    tagsStr: string;

    constructor() {

    }

}

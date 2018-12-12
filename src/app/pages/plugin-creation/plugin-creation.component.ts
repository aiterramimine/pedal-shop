import { Component } from '@angular/core';
import { PluginService } from '../../plugin.services';

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
    pictureId: string;

    constructor(private pluginService: PluginService) {
    }

    upload(event) {
      this.pictureId = "";

      this.pictureId = this.pluginService.uploadFile(event.target.files[0])
    }

}

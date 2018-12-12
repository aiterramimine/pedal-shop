import { Component } from '@angular/core';
import { PluginService } from '../../plugin.services';
import { environment } from 'src/environments/environment.prod';
import { Router, ActivatedRoute} from '@angular/router';
/**
 * This is the home page component.
 */
@Component({
  selector: 'plugin-creation',
  templateUrl: './plugin-creation.component.html',
  styleUrls: ['./plugin-creation.component.scss']
})
export class PluginCreationComponent {

    name: string;
    author: string;
    manufacturer: string;
    repoLink: string;
    description: string;
    tags: string;
    pictureUrl: string;
    isUploading: boolean;

    constructor(private pluginService: PluginService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    upload(event) {
      this.isUploading = true;
      this.pictureUrl = "";

      this.pictureUrl = environment.firebase.storageBucket + '/' + this.pluginService.uploadFile(event.target.files[0], this)
    }

    checkForm() {
      if (!this.name || !this.author || !this.pictureUrl || !this.manufacturer) {
        return false
      }

      return true;
    }

    create() {
      let pedal = {};
      pedal["name"] = this.name;
      pedal["author"] = this.author;
      pedal["manufacturer"] = this.manufacturer;
      pedal["pictureUrl"] = this.pictureUrl;

      if (this.tags) {
        pedal["tags"] = this.tags.split(" ");
      } 

      if (this.repoLink) {
        pedal["repoLink"] = this.repoLink;
      }

      if (this.description) {
        pedal["description"] = this.description;
      }

      this.pluginService.addPedal(pedal);

      this.router.navigate(['/']);
    }

}

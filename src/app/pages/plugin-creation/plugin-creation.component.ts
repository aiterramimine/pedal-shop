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
    id: string;

    constructor(private pluginService: PluginService, private router: Router, private activatedRoute: ActivatedRoute) {
      let params = this.activatedRoute.snapshot.paramMap['params'];

      console.log(params);
      this.id = this.activatedRoute.snapshot.params['id'];
      this.name = params['name'];
      this.author = params['author'];
      this.description = params['description'];
      this.pictureUrl = params['pictureUrl'];
      this.repoLink = params['repoLink'];
      this.manufacturer = params['author'];
      this.tags = params['tags'] ? params['tags'].replace(',', ' ') : '';

    }

    upload(event) {
      this.pictureUrl = "";

      this.pictureUrl = environment.firebase.storageBucket + '/' + this.pluginService.uploadFile(event.target.files[0])
      console.log(this.pictureUrl)
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

      if(this.id) {
        console.log('updating');
        this.pluginService.updatePedal(this.id, pedal);
      } else {
        this.pluginService.addPedal(pedal);
      }
      console.log(this.id);
      

      this.router.navigate(['/']);
    }

}

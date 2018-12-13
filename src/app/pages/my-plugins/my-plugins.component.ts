import { Component } from '@angular/core';
import { PluginService } from '../../plugin.services';
import { environment } from 'src/environments/environment.prod';
import { Router, ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';

/**
 * This is the home page component.
 */
@Component({
  selector: 'my-plugin',
  templateUrl: './my-plugins.component.html',
  styleUrls: ['./my-plugins.component.scss']
})
export class MyPluginsComponent {


    id: string;
    title = 'WAP Shop';
    welcomeMessage = 'Welcome to the WAP shop';
    pedals;
    constructor(private pluginService: PluginService, private router: Router, private activatedRoute: ActivatedRoute) {

      this.id = this.activatedRoute.snapshot.params['name'];

    }

    ngOnInit() {
        this.pedals = this.pluginService.getListPedals().snapshotChanges().pipe(
          map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        }));
      }
}
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PluginService {
    pedals: AngularFireList<any>

    constructor(private db: AngularFireDatabase) {
        this.pedals = db.list('pedals');
        
        //pedals.push({ name: 'hihihi' });
        // this.pedals.forEach(item => {
        //     console.log(item)
        // })
     }

    sayHello() {
        console.log("Hello !")
    }

    getById(id: string) {
        return this.db.object('pedals/' + id).valueChanges();
    }

    getListPedals(): AngularFireList<any> {
        let i = 0;
        return this.pedals
    }
}
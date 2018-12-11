import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PluginService {
    pedals: Observable<any[]>

    constructor(db: AngularFireDatabase) {
        this.pedals = db.list('pedals').valueChanges();
        //pedals.push({ name: 'hihihi' });
        // this.pedals.forEach(item => {
        //     console.log(item)
        // })
     }

    sayHello() {
        console.log("Hello !")
    }

    getListPedals(): Observable<any> {
        let i = 0;
        return this.pedals
    }
}
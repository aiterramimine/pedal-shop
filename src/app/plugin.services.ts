import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PluginService {
    pedals: AngularFireList<any>

    constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
        this.pedals = db.list('pedals');
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
        //ToDo : redirection
    }

    addPedal(pedal) {
        this.pedals.push(pedal);     
    }

    uploadFile(file): string {   
        const randomId = Math.random().toString(36).substring(2);
        let ref;
        ref = this.storage.ref(randomId);
        ref.put(file);
        console.log("file uploaded")

        return randomId;
    }

    updatePedal(id, pedal) {
        this.db.object('pedals/' + id).set(pedal);
    }
}
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

    getById(id: string) {
        let pedal = this.db.object('pedals/' + id).valueChanges();
        return pedal;
    }

    getByAuthor(author: string) {
        let pedals = this.db.list('pedals', ref => ref.orderByChild('author').equalTo(author))
        return pedals;
    }

    getListPedals(): AngularFireList<any> {
        let i = 0;
        return this.pedals
        //ToDo : redirection
    }

    addPedal(pedal) {
        this.pedals.push(pedal);     
    }

    uploadFile(file, caller): string {   
        const randomId = Math.random().toString(36).substring(2);

        let ref;

        ref = this.storage.ref(randomId);

        ref.put(file)
            .then(task => task.ref.getDownloadURL())
            .then(url => {
                caller.pictureUrl = url;
                caller.isUploading = false;
                return url;
            })
            .catch((error) => {
                console.error(error)
                return '';
            });

        return '';

    }

    updatePedal(id, pedal) {
        this.db.object('pedals/' + id).set(pedal);
    }
}
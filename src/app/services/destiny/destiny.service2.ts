import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Destiny} from 'src/app/models/Destiny.model';


@Injectable({
  providedIn: 'root'
})

export class DestinyService2 {
    private dbPath = '/Destiny';
    DestinyRef: AngularFirestoreCollection<Destiny>= null;

  constructor(private db: AngularFirestore) {
    this.DestinyRef = db.collection(this.dbPath);
   }

   createDestiny(Destiny: Destiny): void{
    this.DestinyRef.add({...Destiny});
  }

  updateDestiny(key: string, value: any): Promise<void>{
    return this.DestinyRef.doc(key).update(value);
  }

  deleteDestiny(key:string): Promise<void>{
    return this.DestinyRef.doc(key).delete();
  }
   getDestinyList(): AngularFirestoreCollection<Destiny>{
    return this.DestinyRef;
  }
}
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Hotels, Services} from 'src/app/models/Hotels.model';


@Injectable({
  providedIn: 'root'
})

export class HotelsService {
    private dbPath = '/Hotels';
    HotelsRef: AngularFirestoreCollection<Hotels>= null;

  constructor(private db: AngularFirestore) {
    this.HotelsRef = db.collection(this.dbPath);
   }

   createHotels(Hotels: Hotels): void{
    this.HotelsRef.add({...Hotels});
  }

  updateHotels(key: string, value: any): Promise<void>{
    return this.HotelsRef.doc(key).update(value);
  }

  deleteHotels(key:string): Promise<void>{
    return this.HotelsRef.doc(key).delete();
  }
   getHotelsList(): AngularFirestoreCollection<Hotels>{
    return this.HotelsRef;
  }
}
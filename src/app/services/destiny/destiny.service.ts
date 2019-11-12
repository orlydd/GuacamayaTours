import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Destiny} from 'src/app/models/destiny.model';


@Injectable({
  providedIn: 'root'
})
export class DestinyService {

  destinyData: Destiny;
  /* private dbPath = '/Destiny';
  destinyRef: AngularFirestoreCollection<Destiny>= null; */


  constructor(private firestore: AngularFirestore) {
    
   }

   getDestinies(){
     return this.firestore.collection('Destiny').snapshotChanges();
   }

  


}

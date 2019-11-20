import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Destiny} from 'src/app/models/destiny.model';
import {Observable}  from  'rxjs';
import {map}  from  'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DestinyService {

  destinyCollection: AngularFirestoreCollection<Destiny>;
  destinyDoc: AngularFirestoreDocument<Destiny>;
  destinos: Observable<Destiny[]>;
  destinyData: Destiny;
  /* private dbPath = '/Destiny';
  destinyRef: AngularFirestoreCollection<Destiny>= null; */


  constructor(public db : AngularFirestore) {

    this.destinyCollection= this.db.collection('Destiny', ref=>ref);
    
   }

   deleteDestiny(destiny: Destiny){
     this.destinyDoc = this.db.doc(`Destiny/${destiny.key}`);
     this.destinyDoc.delete();
   }

   
  /*  isActive(destiny: Destiny){
    this.destinyDoc = this.db.doc(`Destiny/${destiny.key}`);
    this.destinyDoc.set()
   } */
   
  addDestiny(destiny: Destiny){
    this.destinyCollection.add(destiny);
  }

  updateDestiny(destiny: Destiny){
    this.destinyDoc = this.db.doc(`Destiny/${destiny.key}`);
    this.destinyDoc.update(destiny);
  }

   getDestinies(): Observable<Destiny[]>{
     this.destinos =this.destinyCollection.snapshotChanges().pipe(
       map(changes=>{ 
         return changes.map(action=>{
           const data = action.payload.doc.data() as Destiny;
           data.key = action.payload.doc.id;
           return data;
         });
       }));

       return this.destinos;
     
   }

  


}

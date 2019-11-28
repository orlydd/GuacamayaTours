import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {States} from 'src/app/models/state';
import {Observable}  from  'rxjs';
import {map}  from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  stateCollection: AngularFirestoreCollection<States>;
  stateDoc: AngularFirestoreDocument<States>;
  state: Observable<States[]>;
  stateData: States;


  constructor(public db: AngularFirestore) {
    this.stateCollection = this.db.collection('States', ref=>ref);
   }

   deleteState(state : States){
     this.stateDoc = this.db.doc(`States/${state.key}`); 
     this.stateDoc.delete();
   }

   addState(state: States){
     this.stateCollection.add(state);
   }

   updateState(state: States){
    this.stateDoc = this.db.doc(`States/${state.key}`);
    this.stateDoc.update(state);
  }

  
  getStates(): Observable<States[]>{
    this.state =this.stateCollection.snapshotChanges().pipe(
      map(changes=>{ 
        return changes.map(action=>{
          const data = action.payload.doc.data() as States;
          data.key = action.payload.doc.id;
          return data;
        });
      }));

      return this.state;
    
  }
}

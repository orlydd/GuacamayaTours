import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Inbox} from 'src/app/models/inbox/message';
import {Observable}  from  'rxjs';
import {map}  from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messageCollection: AngularFirestoreCollection<Inbox>;
  messageDoc: AngularFirestoreDocument<Inbox>;
  message: Observable<Inbox[]>;
  messageData: Inbox;


  constructor(public db: AngularFirestore) {
    this.messageCollection = this.db.collection('Inbox', ref=>ref);
   }
   deleteMessage(inbox : Inbox){
    this.messageDoc = this.db.doc(`Inbox/${inbox.key}`); 
    this.messageDoc.delete();
  }

  addMessage(inbox : Inbox){
    this.messageCollection.add(inbox);
  }

  updateMessage(inbox : Inbox){
   this.messageDoc = this.db.doc(`Inbox/${inbox.key}`);
   this.messageDoc.update(inbox);
 }

 
 getMessages(): Observable<Inbox[]>{
   this.message =this.messageCollection.snapshotChanges().pipe(
     map(changes=>{ 
       return changes.map(action=>{
         const data = action.payload.doc.data() as Inbox;
         data.key = action.payload.doc.id;
         return data;
       });
     }));

     return this.message;
   
 }
}

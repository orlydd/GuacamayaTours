import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Itinerary} from "src/app/models/itinerary";
import {Observable}  from  'rxjs';
import {map}  from  'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  private messageSource = new BehaviorSubject<string>("ningún Hotel");
  private messageSource2 = new BehaviorSubject<string>("ningún precio");
  currentMessage = this.messageSource.asObservable();
  currentMessage2 = this.messageSource2.asObservable();

  itineraryCollection: AngularFirestoreCollection<Itinerary>;
  itineraryDoc: AngularFirestoreDocument<Itinerary>;
  itinerary: Observable<Itinerary[]>;
  itineraryData: Itinerary;
  /* private dbPath = '/Destiny';
  destinyRef: AngularFirestoreCollection<Destiny>= null; */


  constructor(public db : AngularFirestore) {
    
    this.itineraryCollection= this.db.collection('Itinerary', ref=>ref);
    
   }

   changeMessage(message: string) {
      this.messageSource.next(message);
   }
   changeMessage2(message2: string) {
    this.messageSource2.next(message2);
   }
  getAnItinerary(key:string){
    return this.db.collection('Itinerary').doc(key).snapshotChanges();

  }

   deleteDestiny(itinerary: Itinerary){
     this.itineraryDoc = this.db.doc(`Itinerary/${itinerary.key}`);
     this.itineraryDoc.delete();
   }

  addItinerary(itinerary: Itinerary){
    this.itineraryCollection.add(itinerary);
  }

  updateDestiny(itinerary: Itinerary){
    this.itineraryDoc = this.db.doc(`Itinerary/${itinerary.key}`);
    this.itineraryDoc.update(itinerary);
  
  }

   
  getItineraryArray(){
    return this.db.collection('Itinerary').snapshotChanges();
  }

   getItinerary(): Observable<Itinerary[]>{
     this.itinerary =this.itineraryCollection.snapshotChanges().pipe(
       map(changes=>{ 
         return changes.map(action=>{
           const data = action.payload.doc.data() as Itinerary;
           data.key = action.payload.doc.id;
           return data;
         });
       }));

       return this.itinerary;
     
   }

}

import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable}  from  'rxjs';
import {map}  from  'rxjs/operators';
import {Hotels} from 'src/app/models/Hotels.model';


@Injectable({
  providedIn: 'root'
})

export class HotelsService {
  //Hotels CRUD elements
  hotelsCollection: AngularFirestoreCollection<Hotels>;
  hotelsDoc: AngularFirestoreDocument<Hotels>;
  hotels: Observable<Hotels[]>;
  hotelData: Hotels;
/**
 * Elements for hotels view component
 */
 
    private dbPath = '/Hotels';
    HotelsRef: AngularFirestoreCollection<Hotels>= null;

  constructor(public db : AngularFirestore) {
    this.hotelsCollection = this.db.collection('/Hotels', ref=>ref);
    this.HotelsRef = db.collection(this.dbPath);
   }
   /**
    * CRUD Functions 
    */

   deleteHotel(hotel: Hotels){
     this.hotelsDoc = this.db.doc(`Hotels/${hotel.key}`);
     this.hotelsDoc.delete();
   }

   addHotel(hotel: Hotels){
    this.hotelsCollection.add(hotel);

   }
   updateHotel(hotel: Hotels){
    this.hotelsDoc = this.db.doc(`Hotels/${hotel.key}`);
    this.hotelsDoc.update(hotel);
   }
    getHotels(): Observable<Hotels[]>{
      this.hotels =this.hotelsCollection.snapshotChanges().pipe(
        map(changes=>{ 
          return changes.map(action=>{
            const data = action.payload.doc.data() as Hotels;
            data.key = action.payload.doc.id;
            return data;
          });
        }));
 
        return this.hotels;
      
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

  /**
   * Returns Hotels in the db for the Hotels view case
   */
   getHotelsList(): AngularFirestoreCollection<Hotels>{
    return this.HotelsRef;
  }
}
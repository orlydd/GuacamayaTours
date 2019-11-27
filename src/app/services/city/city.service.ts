import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {City} from 'src/app/models/city';
import {Observable}  from  'rxjs';
import {map}  from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cityCollection: AngularFirestoreCollection<City>;
  cityDoc: AngularFirestoreDocument<City>;
  city: Observable<City[]>;
  cityData: City;


  constructor(public db: AngularFirestore) {
    this.cityCollection = this.db.collection('Cities', ref=>ref);
   }

   deleteCity(city: City){
     this.cityDoc = this.db.doc(`Cities/${city.key}`); 
     this.cityDoc.delete();
   }

   addCity(city: City){
     this.cityCollection.add(city);
   }

   updateCity(city: City){
    this.cityDoc = this.db.doc(`Cities/${city.key}`);
    this.cityDoc.update(city);
  }

  
  getCities(): Observable<City[]>{
    this.city =this.cityCollection.snapshotChanges().pipe(
      map(changes=>{ 
        return changes.map(action=>{
          const data = action.payload.doc.data() as City;
          data.key = action.payload.doc.id;
          return data;
        });
      }));

      return this.city;
    
  }
}

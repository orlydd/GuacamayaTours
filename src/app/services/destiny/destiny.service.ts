import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Destiny} from 'src/app/models/destiny.model';


@Injectable({
  providedIn: 'root'
})
export class DestinyService {

  private dbPath = '/Destiny';
  destinyRef: AngularFirestoreCollection<Destiny>= null;

  constructor(private db: AngularFirestore) {
    this.destinyRef = db.collection(this.dbPath);
   }

   createDestiny(destiny: Destiny): void{
     this.destinyRef.add({...destiny});
   }

   updateDestiny(key: string, value: any): Promise<void>{
     return this.destinyRef.doc(key).update(value);
   }

   deleteDestiny(key:string): Promise<void>{
     return this.destinyRef.doc(key).delete();
   }
   getDestinyList(): AngularFirestoreCollection<Destiny>{
     return this.destinyRef;
   }

   deleteAll(){
     this.destinyRef.get().subscribe(
       querySnapshot => {
         querySnapshot.forEach((doc)=>{
           doc.ref.delete();
           
         });
      
       },
       error =>{
         console.log('Error: ', error);
       });
   }

}

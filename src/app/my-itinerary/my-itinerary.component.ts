import { Component, OnInit } from '@angular/core';
import {ItineraryService} from '../services/itinerary/itinerary.service'
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Itinerary } from '../models/itinerary';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-my-itinerary',
  templateUrl: './my-itinerary.component.html',
  styleUrls: ['./my-itinerary.component.scss']
})
export class MyItineraryComponent implements OnInit {

  itinerary : Itinerary[];
  itineraryCollection: AngularFirestoreCollection<Itinerary>;
  codeEntered: string;
  itineraryDoc: {};
  show: boolean;


  constructor( private db: AngularFirestore, private itineraryService: ItineraryService) { 
    this.itineraryCollection = this.db.collection('Itinerary');
    
   
    this.itineraryService.getItinerary().subscribe(
     itinerary =>{
       this.itinerary = itinerary;
     }
   )
  }

  ngOnInit() {
    this.show = false;
  }


  onSubmit(form: NgForm){
    this.itineraryCollection = this.checkCode(form);
    console.log(this.itineraryDoc);
  }

  checkCode(form: NgForm) {
    this.show= true;
    let codeEntered = form.value.code;
    let code = this.db.collectionGroup('Itinerary', ref=>ref.where('itineraryCode', '==', codeEntered));
    var collection;
    code.get().toPromise().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        console.log(doc.id,'=>',doc.data());
        let itineraryDoc = {...doc.data()};
        console.log(itineraryDoc);
      });
      collection = querySnapshot;
    }).catch(e=>{
      console.log(e);
    });
    return collection;
  }

}

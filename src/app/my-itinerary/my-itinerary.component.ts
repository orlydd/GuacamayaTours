import { Component, OnInit } from '@angular/core';
import {ItineraryService} from '../services/itinerary/itinerary.service'
import { Itinerary } from '../models/itinerary';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

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
    this.checkCode(form);
  }

  checkCode(form: NgForm) {
    this.show= true;
    let codeEntered = form.value.code;
    let code = this.db.collectionGroup('Itinerary', ref=>ref.where('itineraryCode', '==', codeEntered));
    let codeAux = code.get().toPromise().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        let itineraryDoc =(doc.id,'=>',doc.data());
        console.log(itineraryDoc);
      });
    }).catch(e=>{
      console.log(e);
    });
  }

}

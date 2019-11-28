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
  itineraryDoc: {arrivalDate:string, departureDate:string, destination:string, hotel:string};
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
    console.log(this.itineraryDoc);
    this.checkCode(form);
    console.log(this.itineraryDoc.arrivalDate);
  }

  checkCode(form: NgForm) {
    this.show= true;
    let codeEntered = form.value.code;
    let code = this.db.collection('Itinerary', ref=>ref.where('itineraryCode', '==', codeEntered));
    code.get().toPromise().then(querySnapshot=>{
      querySnapshot.forEach(doc=>{
        console.log(querySnapshot.docs);
        let itineraryDoc = {...doc.data()};
        return itineraryDoc;
      });
      
    this.itineraryDoc = querySnapshot;
    }).catch(e=>{
      console.log(e);
    });
  }

}

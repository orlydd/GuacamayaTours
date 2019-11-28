
import { Component, OnInit } from '@angular/core';
import {ItineraryService} from '../services/itinerary/itinerary.service'
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Itinerary } from '../models/itinerary';
import { NgForm } from '@angular/forms';
export interface Itinerary { arrivalDate:string, departureDate:string, destination:string,hotel:string };

@Component({
  selector: 'app-my-itinerary',
  templateUrl: './my-itinerary.component.html',
  styleUrls: ['./my-itinerary.component.scss']
})
export class MyItineraryComponent implements OnInit {

  itinerary : Itinerary;
  itineraryCollection: AngularFirestoreCollection<Itinerary>;
  codeEntered: string;
  itineraryDoc: AngularFirestoreDocument<Itinerary>;
  show: boolean;


  constructor( private db: AngularFirestore, private itineraryService: ItineraryService) { 
 
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
    this.db.doc<Itinerary>(`Itinerary/${codeEntered}`).get().toPromise().then(snapshot => this.itinerary = snapshot.data() as Itinerary);
}


}

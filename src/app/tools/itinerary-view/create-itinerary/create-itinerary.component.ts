import { Component, OnInit, Input, } from '@angular/core';
import {ItineraryService} from 'src/app/services/itinerary/itinerary.service';
import {Itinerary} from 'src/app/models/itinerary';
import {FormsModule, NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs'
import { Observable } from 'rxjs'
@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrls: ['./create-itinerary.component.scss']
})
export class CreateItineraryComponent implements OnInit {
  itineraryData: Itinerary;
message:string;
  constructor( public ItineraryService: ItineraryService, private firestore: AngularFirestore) { }

  
    
  ngOnInit(){ 
    this.ItineraryService.currentMessage.subscribe(message => this.message = message)
  }
  
  newMessage(message:string){
  this.ItineraryService.changeMessage(this.message)}
  //Resets the value of the form
  resetForm(form?: NgForm){
  
    if(form!=null)
      form.resetForm();
    this.ItineraryService.itineraryData={
    clientName: '',
    clientID: '',
    email: '',
    phoneNumber: '',
    companions:0,
    totalPrice: 0,
    adress: '',
    destination: '',
    hotel: '',
    arrivalDate: '',
    departureDate: '',
    key: null
  }
    
  }
  onSubmit(form: NgForm){
    let data = Object.assign({}, form.value);
    this.ItineraryService.addItinerary(data);
    this.resetForm(form);
  
  }
}




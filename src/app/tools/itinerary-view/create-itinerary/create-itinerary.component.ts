import { Component, OnInit, Input } from '@angular/core';
import {ItineraryService} from 'src/app/services/itinerary/itinerary.service';
import {Itinerary} from 'src/app/models/itinerary';
import {FormsModule, NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrls: ['./create-itinerary.component.scss']
})
export class CreateItineraryComponent implements OnInit {
@Input() Hotelescogido:string;
@Input() Destinoescogido:string;
@Input() Preciodelhotel:number;
message:string;
  constructor( public itineraryService: ItineraryService, private firestore: AngularFirestore) { }

  ngOnInit(){ 
    this.itineraryService.currentMessage.subscribe(message => this.message = message)
  }
  //Resets the value of the form
  resetForm(form?: NgForm){
  
    if(form!=null)
      form.resetForm();
    this.itineraryService.itineraryData={
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
    this.itineraryService.addItinerary(data);
    this.resetForm(form);
  
  }
}




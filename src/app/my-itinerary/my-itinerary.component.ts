import { Component, OnInit } from '@angular/core';
import {ItineraryService} from '../services/itinerary/itinerary.service'
import { Itinerary } from '../models/itinerary';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
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
  itineraryDoc: Itinerary;
  show: boolean;
  public itenerary:any;


  constructor( private db: AngularFirestore, private itineraryService: ItineraryService) { 
    this.itineraryCollection = this.db.collection('Itinerary');
    
   
    this.itineraryService.getItinerary().subscribe(
     itinerary =>{
       this.itinerary = itinerary;
     }
   )
  }

  getItinerary(key: string){
    return this.itineraryService.getAnItinerary(key);
  }


  ngOnInit() {
    this.show = false;
  }


  onSubmit(form: NgForm){
    this.itinerary=[];
    this.show= true;
    let codeEntered = form.value.code;
    let code = this.db.collectionGroup('Itinerary', ref=>ref.where('itineraryCode', '==', codeEntered));
    code.get().toPromise().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        console.log(doc.id,'=>',doc.data());
        this.itineraryDoc = this.getItinerary(doc.id);
        console.log(this.itineraryDoc);
      });
    }).catch(e=>{
      console.log(e);
    });

    return code;
  }

}

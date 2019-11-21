import { Component, OnInit, Input } from '@angular/core';
import {ItineraryService} from 'src/app/services/itinerary/itinerary.service';
import {Itinerary} from 'src/app/models/itinerary';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-itinerary-list',
  templateUrl: './itinerary-list.component.html',
  styleUrls: ['./itinerary-list.component.scss']
})
export class ItineraryListComponent implements OnInit {

  
  itinerary: Itinerary[];

  constructor(private itineraryService: ItineraryService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.itineraryService.getItinerary().subscribe(
      itinerary =>{
        this.itinerary = itinerary;
      }
    )



  }
/* 

  onEdit(dest: itinerary){
    let destiny = Object.assign({}, dest);
    this.destinyService.destinyData= destiny;
  } */

  onDelete(key:string){
    //if(confirm("¿Esta seguro que quiere eliminar este destino?")){
      this.firestore.doc('Itinerary/'+key).delete();
   // }
  }
}

import { Component, OnInit } from '@angular/core';
import {DestinyService2} from 'src/app/services/destiny/destiny.service2';
import * as _ from 'lodash';
import {ItineraryService} from 'src/app/services/itinerary/itinerary.service';
import {Itinerary} from 'src/app/models/itinerary';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrls: ['./create-itinerary.component.scss']
})
export class CreateItineraryComponent implements OnInit {

  Destiny: any;
  filteredDestiny:any;
  itinerary : Itinerary;
    /// Active filter rules
    filters = {}
  constructor(
    private DestinyService2: DestinyService2, 
    private itineraryService: ItineraryService, 
    private firestore: AngularFirestore,

    ) { }

  ngOnInit(){
    this.getDestinyList();

  }
  setDestination(n: string){
    var destination : string;
    this.itinerary.destination =n;
    console.log(this.itinerary.destination);
  }
  /*
  *This functions makes the itinerary 
  */
 submitItinerary(){
   let data = this.itinerary;
   this.itineraryService.addItinerary(data);
 }

  sortAscending(property: any){
    this.filteredDestiny=_.sortBy(this.filteredDestiny,[property] );
  }
  sortDescending(property: any){
    this.filteredDestiny=_.reverse(_.sortBy(this.filteredDestiny,[property] ));
  }

  updateActive(isActive : boolean){
    this.DestinyService2.updateDestiny(this.Destiny.key, {active: isActive}).catch(err => console.log(err));
  }


  private applyFilters() {
    this.filteredDestiny = _.filter(this.Destiny, _.conforms(this.filters) )
  }

  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  }

  /// filter  numbers greater than rule
  filterGreaterThan(property: string, rule: number) {
    this.filters[property] = val => val > rule
    this.applyFilters()
  }
  /// filter  numbers lesser than rule
  filterLessThan(property: string, rule: number) {
    this.filters[property] = val => val < rule
    this.applyFilters()
  }

  /// filter properties that resolve to true
  filterBoolean(property: string, rule: boolean) {
    if (!rule) this.removeFilter(property)
    else {
      this.filters[property] = val => val
      this.applyFilters()
    }
  }
  getDestinyList(){
    this.DestinyService2.getDestinyList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c=> ({key:c.payload.doc.id,...c.payload.doc.data()})
         )
        )
    ).subscribe(Destiny=>{
      this.Destiny = Destiny;
      this.filteredDestiny=Destiny;
    })
  }
  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }

}

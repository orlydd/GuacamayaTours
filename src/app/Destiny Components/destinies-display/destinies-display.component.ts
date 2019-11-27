import { Component, OnInit, Input } from '@angular/core';
import {DestinyService2} from 'src/app/services/destiny/destiny.service2';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-destinies-display',
  templateUrl: './destinies-display.component.html',
  styleUrls: ['./destinies-display.component.scss']
})

export class DestiniesDisplayComponent implements OnInit {
  
  Destiny: any;
  filteredDestiny:any;
    /// Active filter rules
    filters = {}
  constructor(private DestinyService2: DestinyService2) { }

  ngOnInit(){
    this.getDestinyList();

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

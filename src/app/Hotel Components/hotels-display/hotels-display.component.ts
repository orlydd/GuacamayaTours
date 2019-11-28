import { Component, OnInit, Input } from '@angular/core';
import {HotelsService} from 'src/app/services/HotelsService/Hotels.service';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-Hotels-display',
  templateUrl: './Hotels-display.component.html',
  styleUrls: ['./Hotels-display.component.scss']
})
export class HotelsDisplayComponent implements OnInit {
  Hotels: any;
  filteredHotels:any;
    /// Active filter rules
    filters = {}
  constructor(private HotelsService: HotelsService) { }

  ngOnInit(){
    this.getHotelsList();

  }

  sortAscending(property: any){
    this.filteredHotels=_.sortBy(this.filteredHotels,[property] );
  }
  sortDescending(property: any){
    this.filteredHotels=_.reverse(_.sortBy(this.filteredHotels,[property] ));
  }

  updateActive(isActive : boolean){
    this.HotelsService.updateHotels(this.Hotels.key, {active: isActive}).catch(err => console.log(err));
  }


  private applyFilters() {
    this.filteredHotels = _.filter(this.Hotels, _.conforms(this.filters) )
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
  getHotelsList(){
    this.HotelsService.getHotelsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c=> ({key:c.payload.doc.id,...c.payload.doc.data()})
         )
        )
    ).subscribe(Hotels=>{
      this.Hotels = Hotels;
      this.filteredHotels=Hotels;
    })
  }
  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }
  
 
}

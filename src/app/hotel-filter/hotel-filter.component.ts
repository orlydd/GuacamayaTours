import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {HotelsService} from 'src/app/services/HotelsService/Hotels.service';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { Hotels } from '../models/Hotels.model';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit {

  constructor(private HotelsService: HotelsService) { }

  /// unwrapped arrays from firebase
  Hotels: any;
  filteredHotels: any;

  /// Active filter rules
  filters = {}

  ngOnInit() {
    this.Hotels.list('/Hotels')
      .subscribe(Hotels => {
        this.Hotels = Hotels;
        this.applyFilters()
    })
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
    })
  }
  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }
}


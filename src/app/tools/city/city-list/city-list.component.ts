import { Component, OnInit } from '@angular/core';
import {CityService} from 'src/app/services/city/city.service';
import {City} from 'src/app/models/city';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  cities: City[];

  constructor(private cityService: CityService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.cityService.getCities().subscribe(
      city =>{
        this.cities = city;
      }
    )
  }

  isActive(c: City){
    c.active = !c.active;
    this.cityService.updateCity(c);
  }

  onEdit(c: City){
    let city = Object.assign({}, c);
    this.cityService.cityData= city;
  }

}

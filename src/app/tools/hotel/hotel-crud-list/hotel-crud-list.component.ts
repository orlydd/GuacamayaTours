import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {HotelsService} from 'src/app/services/Hotelsservice/hotels.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {Hotels} from 'src/app/models/Hotels.model';

@Component({
  selector: 'app-hotel-crud-list',
  templateUrl: './hotel-crud-list.component.html',
  styleUrls: ['./hotel-crud-list.component.scss']
})
export class HotelCrudListComponent implements OnInit {

  hotels: Hotels[];

  constructor(public hotelsService : HotelsService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.hotelsService.getHotels().subscribe(
      hotel=>{
        this.hotels = hotel;
      }
    );

  }
  
  isActive(d: Hotels){
    d.active = !d.active;
    this.hotelsService.updateHotel(d);
  }

  onEdit(h: Hotels){
    let hotel = Object.assign({}, h);
    this.hotelsService.hotelData= hotel;
  }

}

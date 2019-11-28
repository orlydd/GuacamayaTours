import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {HotelsService} from 'src/app/services/Hotelsservice/hotels.service';
import {Hotels} from 'src/app/models/Hotels.model';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.scss']
})
export class CreateHotelComponent implements OnInit {

  constructor(public hotelsService : HotelsService) { }

  ngOnInit() {
  }

}

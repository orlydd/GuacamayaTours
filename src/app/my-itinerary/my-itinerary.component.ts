import { Component, OnInit } from '@angular/core';
import {ItineraryService} from '../services/itinerary/itinerary.service'

@Component({
  selector: 'app-my-itinerary',
  templateUrl: './my-itinerary.component.html',
  styleUrls: ['./my-itinerary.component.scss']
})
export class MyItineraryComponent implements OnInit {


  constructor() { 
  }

  ngOnInit() {
  }

  checkCode(code:string){
    
  }

}

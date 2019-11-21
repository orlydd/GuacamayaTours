import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-itinerary-crud',
  templateUrl: './itinerary-crud.component.html',
  styleUrls: ['./itinerary-crud.component.scss']
})
export class ItineraryCrudComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

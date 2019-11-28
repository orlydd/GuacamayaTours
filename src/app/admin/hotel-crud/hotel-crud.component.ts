import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-hotel-crud',
  templateUrl: './hotel-crud.component.html',
  styleUrls: ['./hotel-crud.component.scss']
})
export class HotelCrudComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

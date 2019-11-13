import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-destiny-crud',
  templateUrl: './destiny-crud.component.html',
  styleUrls: ['./destiny-crud.component.scss']
})
export class DestinyCrudComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-state-crud',
  templateUrl: './state-crud.component.html',
  styleUrls: ['./state-crud.component.scss']
})
export class StateCrudComponent implements OnInit {

  


  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
 
  

}

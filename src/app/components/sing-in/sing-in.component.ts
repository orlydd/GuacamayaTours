import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit() {
  }

}

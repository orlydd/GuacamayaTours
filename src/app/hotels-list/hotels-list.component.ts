import { Component, OnInit, Input } from '@angular/core';
import {HotelsService} from 'src/app/services/HotelsService/Hotels.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-Hotels-list',
  templateUrl: './Hotels-list.component.html',
  styleUrls: ['./Hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
 
  
  Hotels: any;

  constructor() { }

  ngOnInit() {
  }}
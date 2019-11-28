import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Hotels} from 'src/app/models/Hotels.model';
import { Injectable } from '@angular/core';
import { HotelsService } from './../../services/Hotelsservice/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {


  constructor(private HotelsService : HotelsService) { 

}
ngOnInit(){}
}

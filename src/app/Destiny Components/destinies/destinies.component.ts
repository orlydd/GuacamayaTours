import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Destiny} from 'src/app/models/destiny.model';
import { Injectable } from '@angular/core';
import { DestinyService2 } from 'src/app/services/destiny/destiny.service2'

@Component({
  selector: 'app-destinies',
  templateUrl: './destinies.component.html',
  styleUrls: ['./destinies.component.scss']
})
export class DestiniesComponent implements OnInit {
  destiny:any;

  constructor(private DestinyService2 : DestinyService2) { 

}
ngOnInit(){}
}

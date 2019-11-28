import { Component, OnInit, Input } from '@angular/core';
import {DestinyService} from 'src/app/services/destiny/destiny.service';
import {Destiny} from 'src/app/models/destiny.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-destiny-list',
  templateUrl: './destiny-list.component.html',
  styleUrls: ['./destiny-list.component.scss']
})
export class DestinyListComponent implements OnInit {
 
  
  destiny: Destiny[];

  constructor(private destinyService: DestinyService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.destinyService.getDestinies().subscribe(
      destiny=>{
        this.destiny = destiny;
      }
    );

  }

  isActive(d: Destiny){
    d.active = !d.active;
    this.destinyService.updateDestiny(d);
  }

  onEdit(dest: Destiny){
    let destiny = Object.assign({}, dest);
    this.destinyService.destinyData= destiny;
  }
 
  
 
 
 
 

}

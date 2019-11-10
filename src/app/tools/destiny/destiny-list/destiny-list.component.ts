import { Component, OnInit } from '@angular/core';
import {DestinyService} from 'src/app/services/destiny/destiny.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-destiny-list',
  templateUrl: './destiny-list.component.html',
  styleUrls: ['./destiny-list.component.scss']
})
export class DestinyListComponent implements OnInit {
  
  destiny: any;

  constructor(private destinyService: DestinyService) { }

  ngOnInit() {
    this.getDestinyList();
  }
  getDestinyList(){
    this.destinyService.getDestinyList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c=> ({key:c.payload.doc.id,...c.payload.doc.data()})
         )
        )
    ).subscribe(destiny=>{
      this.destiny = destiny;
    })
  }

  deleteDestiny(){
    this.destinyService.deleteAll();
  }

}

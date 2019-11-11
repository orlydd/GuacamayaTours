import { Component, OnInit, Input } from '@angular/core';
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
  updateActive(isActive : boolean){
    this.destinyService.updateDestiny(this.destiny.key, {active: isActive}).catch(err => console.log(err));
  }

  deleteDestiny(){
    this.destinyService.deleteDestiny(this.destiny.key).catch(err => console.log(err));
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

 

}

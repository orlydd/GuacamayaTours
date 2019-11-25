import { Component, OnInit, Input } from '@angular/core';
import {DestinyService} from 'src/app/services/destiny/destiny.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-destinies-display',
  templateUrl: './destinies-display.component.html',
  styleUrls: ['./destinies-display.component.scss']
})
export class DestiniesDisplayComponent implements OnInit {
 
  
  Destiny: any;

  constructor(private DestinyService: DestinyService) { }

  ngOnInit() {
    this.getDestinyList();
  }
  updateActive(isActive : boolean){
    this.DestinyService.updateDestiny(this.Destiny.key, {active: isActive}).catch(err => console.log(err));
  }

  getDestinyList(){
    this.DestinyService.getDestinyList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c=> ({key:c.payload.doc.id,...c.payload.doc.data()})
         )
        )
    ).subscribe(Destiny=>{
      this.Destiny = Destiny;
    })
  }

}

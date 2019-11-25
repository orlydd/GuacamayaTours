import { Component, OnInit, Input } from '@angular/core';
import {HotelsService} from 'src/app/services/HotelsService/Hotels.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-Hotels-display',
  templateUrl: './Hotels-display.component.html',
  styleUrls: ['./Hotels-display.component.scss']
})
export class HotelsDisplayComponent implements OnInit {
  
  Hotels: any;
 
  constructor(private HotelsService: HotelsService) { }

  ngOnInit() {
    this.getHotelsList();
  }
  updateActive(isActive : boolean){
    this.HotelsService.updateHotels(this.Hotels.key, {active: isActive}).catch(err => console.log(err));
  }

  getHotelsList(){
    this.HotelsService.getHotelsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c=> ({key:c.payload.doc.id,...c.payload.doc.data()})
         )
        )
    ).subscribe(Hotels=>{
      this.Hotels = Hotels;
    })
  }
}


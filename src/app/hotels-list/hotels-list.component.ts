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

  constructor(private HotelsService: HotelsService) { }

  ngOnInit() {
    this.getHotelsList();
  }
  updateActive(isActive : boolean){
    this.HotelsService.updateHotels(this.Hotels.key, {active: isActive}).catch(err => console.log(err));
  }

  deleteHotels(){
    this.HotelsService.deleteHotels(this.Hotels.key).catch(err => console.log(err));
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

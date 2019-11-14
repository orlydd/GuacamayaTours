import { Component, OnInit } from '@angular/core';
import {HotelsService} from 'src/app/services/HotelsService/Hotels.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hotels-see-more',
  templateUrl: './hotels-see-more.component.html',
  styleUrls: ['./hotels-see-more.component.scss']
})
export class HotelsSeeMoreComponent implements OnInit {

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
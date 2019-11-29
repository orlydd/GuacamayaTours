import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, AfterContentInit, OnChanges} from '@angular/core';
import {HotelsService} from './../../services/Hotelsservice/hotels.service';
import { map } from 'rxjs/operators';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { ItineraryService } from './../../services/itinerary/itinerary.service'

@Component({
  selector: 'app-hotels-see-more',
  templateUrl: './hotels-see-more.component.html',
  styleUrls: ['./hotels-see-more.component.scss']
})
export class HotelsSeeMoreComponent implements OnInit,AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  @Input() i1: number;
  lat:number;
  lng:number;
  @Input() lat2:number;
  @Input() lng2:number;
  message: string;
  Hotels: any;
  value : any=1;
  
  map: google.maps.Map;
  coordinates: google.maps.LatLng;
  
  mapOptions: google.maps.MapOptions

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });
  ngAfterViewInit(){

   }
  constructor(private HotelsService: HotelsService,private ItineraryService: ItineraryService) {  }
    
  ngOnInit() {
    this.lat=this.lat2;
    this.lng=this.lng2;
    this.coordinates = new google.maps.LatLng(Number(this.lat), Number(this.lng));
    this.mapOptions= {
      center: this.coordinates,
      zoom: 12,
    };
    this.getHotelsList();
    this.ItineraryService.currentMessage.subscribe(message => this.message = message)
  }
  newMessage(i1) {
    this.ItineraryService.changeMessage(i1)
  }
  updateActive(isActive : boolean){
    this.HotelsService.updateHotels(this.Hotels.key, {active: isActive}).catch(err => console.log(err));
  }
  onSelect(data: TabDirective): void {
    this.value = data.id;};
  
  mapInitializer() {
    setTimeout(() => {this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);  
    }, 500);
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
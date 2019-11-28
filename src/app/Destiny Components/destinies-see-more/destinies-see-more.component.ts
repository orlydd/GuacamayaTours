import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, AfterContentInit, OnChanges} from '@angular/core';
import { DestinyService2 } from 'src/app/services/destiny/destiny.service2';
import { map } from 'rxjs/operators';
import { TabDirective } from 'ngx-bootstrap/tabs';
import {HotelsService} from 'src/app/services/HotelsService/Hotels.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-destiny-see-more',
  templateUrl: '/destinies-see-more.component.html',
  styleUrls: ['./destinies-see-more.component.scss']
})
export class DestiniesSeeMoreComponent implements OnInit  {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  @ViewChild('closeBtn',{static: false}) closeBtn: ElementRef;
  @Input() i2: number;
  Destiny: any;
  value : any=1;
  lat:number;
  lng:number;
  @Input() lat2:number;
  @Input() lng2:number;
  Hotels:any;
  map: google.maps.Map;

  coordinates: google.maps.LatLng;
  
  mapOptions: google.maps.MapOptions
  
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });
  constructor(private DestinyService2: DestinyService2,private HotelsService: HotelsService,private r: Router) { }

  ngOnInit() {
    this.lat=this.lat2;
    this.lng=this.lng2;
    this.coordinates = new google.maps.LatLng(Number(this.lat), Number(this.lng));
    this.mapOptions= {
      center: this.coordinates,
      zoom: 12,
    };
    this.getDestinyList();
    this.getHotelsList();

  }
  updateActive(isActive : boolean){
    this.DestinyService2.updateDestiny(this.Destiny.key, {active: isActive}).catch(err => console.log(err));
  }
  onSelect(data: TabDirective): void {
    this.value = data.id;}
    
  Hotelsnavigate(){
      this.r.navigate(['/Hotels']);
      this.closeModal();
    }
    private closeModal(): void {
      let element: HTMLElement = document.getElementById('closethemodal') as HTMLElement
      element.click();
  }
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
  getDestinyList(){
    this.DestinyService2.getDestinyList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c=> ({key:c.payload.doc.id,...c.payload.doc.data()})
         )
        )
    ).subscribe(Destiny=>{
      this.Destiny = Destiny;
    })
  }
}

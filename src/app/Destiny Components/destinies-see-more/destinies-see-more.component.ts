import { Component, OnInit , Input } from '@angular/core';
import { DestinyService2 } from 'src/app/services/destiny/destiny.service2';
import { map } from 'rxjs/operators';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-destiny-see-more',
  templateUrl: '/destinies-see-more.component.html',
  styleUrls: ['./destinies-see-more.component.scss']
})
export class DestiniesSeeMoreComponent implements OnInit {
  @Input() i2: number;
  Destiny: any;
  value : any=1;
  constructor(private DestinyService2: DestinyService2) { }

  ngOnInit() {
    this.getDestinyList();
  }
  updateActive(isActive : boolean){
    this.DestinyService2.updateDestiny(this.Destiny.key, {active: isActive}).catch(err => console.log(err));
  }
  onSelect(data: TabDirective): void {
    this.value = data.id;}


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
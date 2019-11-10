import { Component, OnInit, Input } from '@angular/core';
import {DestinyService} from 'src/app/services/destiny/destiny.service';
import {Destiny} from 'src/app/models/destiny.model';
@Component({
  selector: 'app-destiny-details',
  templateUrl: './destiny-details.component.html',
  styleUrls: ['./destiny-details.component.scss']
})
export class DestinyDetailsComponent implements OnInit {

  @Input() destiny : Destiny;

  constructor(private destinyService: DestinyService) { }

  ngOnInit() {
  }

  updateActive(isActive : boolean){
    this.destinyService.updateDestiny(this.destiny.key, {active: isActive}).catch(err => console.log(err));
  }

  deleteDestiny(){
    this.destinyService.deleteDestiny(this.destiny.key).catch(err => console.log(err));
  }

}

import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DestinyService} from 'src/app/services/destiny/destiny.service';
import {Destiny} from 'src/app/models/destiny.model';


@Component({
  selector: 'app-create-destiny',
  templateUrl: './create-destiny.component.html',
  styleUrls: ['./create-destiny.component.scss']
})
export class CreateDestinyComponent implements OnInit {

  destiny: Destiny = new Destiny();
  submitted= false;

  constructor(private destinyService : DestinyService) { }

  ngOnInit() {
  }

  newDestiny(): void{
    this.submitted=false;
    this.destiny= new Destiny();
  }

  save(){
    this.destinyService.createDestiny(this.destiny);
    this.destiny= new Destiny();
  }
  onSubmit(){
    this.submitted= true;
    this.save();
  }

}

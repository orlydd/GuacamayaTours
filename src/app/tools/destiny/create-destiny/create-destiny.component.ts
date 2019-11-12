import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {DestinyService} from 'src/app/services/destiny/destiny.service';
import {Destiny} from 'src/app/models/destiny.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-create-destiny',
  templateUrl: './create-destiny.component.html',
  styleUrls: ['./create-destiny.component.scss']
})
export class CreateDestinyComponent implements OnInit {
  
  destiny: Destiny = new Destiny();
  

  constructor(private destinyService : DestinyService, 
    private firestore: AngularFirestore ) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm){
  
    if(form!=null)
      form.resetForm();
    this.destinyService.destinyData={
      key: null,
    destinyId: '',
    name: '',
    description: '',
    category: '',
    services:'',
    activities: '',
    latitude: '',
    longitude: '',
    state: '',
    city: '',
    direction: '',
    photo1:'',
    photo2:'',
    photo3:'',
    culture: '',
    gastronomy: '',
    hotel1: '',
    hotel2: '',
    hotel3: '',
    active : true,
    }
  }


 /*  save(){
    this.destinyService.createDestiny(this.destiny);
    this.destiny= new Destiny();
  } */
  onSubmit(form: NgForm){
    let data = Object.assign({},form.value);
    delete data.key;
    if(form.value.key == null){
      this.firestore.collection('Destiny').add(data);
    }
    else {
        this.firestore.collection('Destiny').doc(form.value.key).set(data); 
    }  
      
    this.resetForm(form);
  
  } 
}

import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {DestinyService} from 'src/app/services/destiny/destiny.service';
import {Destiny} from 'src/app/models/destiny.model';
//import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-create-destiny',
  templateUrl: './create-destiny.component.html',
  styleUrls: ['./create-destiny.component.scss']
})
export class CreateDestinyComponent implements OnInit {


 
  constructor(public destinyService : DestinyService ) { }

  ngOnInit() {
    this.resetForm();
  }

//Resets the value of the form
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
    photos: '',
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

  /**
   * Operations add and update with firestore
   * @param form 
   */
  isActive(d: Destiny){
    d.active = !d.active;
    this.destinyService.updateDestiny(d);
  }

  onSubmit(form: NgForm){
    let data = Object.assign({}, form.value);
    if(form.value.key == null){
      data.active= true ;
      this.destinyService.addDestiny(data);
    } else{
      if(form.value.destinyId !== ''){
        data.destinyId= form.value.destinyId;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.name !== ''){
        data.name= form.value.name;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.description !== ''){
        data.description = form.value.description ;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.category !== ''){
        data.category= form.value.category;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.services !== ''){
        data.services= form.value.services;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.activities !== ''){
        data.activities = form.value.activities;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.latitude !== ''){
        data.latitude= form.value.latitude;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.longitude!== ''){
        data.longitude= form.value.longitude;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.state !== ''){
        data.state= form.value.state;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.city !== ''){ 
        data.city = form.value.city;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.direction !== ''){
        data.direction= form.value.direction;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.culture !== ''){
        data.culture= form.value.culture;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.gastronomy !== ''){
        data.gastronomy= form.value.gastronomy;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.hotel1 !== ''){
        data.hotel1= form.value.hotel1;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.hotel2 !== ''){
        data.hotel2 = form.value.hotel2 
        this.destinyService.updateDestiny(data);;
      }
      if(form.value.hotel3 !== ''){
        data.hotel3= form.value.hotel3;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.photos !== ''){
        data.photos= form.value.photos;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.photo1 !== ''){
        data.photo1= form.value.photo1;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.photo2 !== ''){
        data.photo2= form.value.photo2;
        this.destinyService.updateDestiny(data);
      }
      if(form.value.photo3 !== ''){
        data.photo3 = form.value.photo3;
        this.destinyService.updateDestiny(data);
      }
      //this.destinyService.updateDestiny(data);
    }
   
        //this.firestore.collection('Destiny').doc( form.value.key).update(data); 
       //this.firestore.collection('Destiny').doc(form.value.key).set(data, {merge:true});
    
    this.resetForm(form);
  
  } 
}

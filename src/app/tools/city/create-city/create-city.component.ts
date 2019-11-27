import { Component, OnInit } from '@angular/core';
import {CityService} from 'src/app/services/city/city.service';
import {City} from 'src/app/models/city';
import { map } from 'rxjs/operators';
import {FormsModule, NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss']
})
export class CreateCityComponent implements OnInit {

  constructor(private cityService: CityService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }
  //Resets the value of the form
  resetForm(form?: NgForm){
  
    if(form!=null)
      form.resetForm();
    this.cityService.cityData={
      key: null,
      state: '' ,
      cityID: '',
      name: '',
      active : true
    }
  }
  /**
   * Operations add and update with firestore
   * @param form 
   */

  onSubmit(form: NgForm){
    let data = Object.assign({}, form.value);
    if(form.value.key == null){
      data.active= true ;
      this.cityService.addCity(data);
    } else{
      if(form.value.cityID !== ''){
        data.cityID= form.value.cityID;
        this.cityService.updateCity(data);
      }
      if(form.value.name !== ''){
        data.name= form.value.name;
        this.cityService.updateCity(data);
      }
      if(form.value.state !== ''){
        data.state= form.value.state;
        this.cityService.updateCity(data);
      }
      
    }
   
    
    this.resetForm(form);
  
  } 

}

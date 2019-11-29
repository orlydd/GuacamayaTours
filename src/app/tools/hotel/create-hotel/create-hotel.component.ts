import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {HotelsService} from 'src/app/services/Hotelsservice/hotels.service';
import {Hotels} from 'src/app/models/Hotels.model';

@Component({
  selector: 'app-hotel-crud-list',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.scss']
})
export class CreateHotelComponent implements OnInit {

  constructor(public hotelsService : HotelsService) { }

  ngOnInit() {
    this.resetForm();
  }
  //Resets the value of the form
  resetForm(form?: NgForm){
  
    if(form!=null)
      form.resetForm();
    this.hotelsService.hotelData={
    key: null,
    hotelsId: '',
    name: '',
    description: '',
    category: '',
    availability:0,
    popularity: 0,
    price: 0,
    stars: 0,
    latitude: 0,
    longitude: 0,
    state: '',
    city: '',
    photos: '',
    photo1:'',
    photo2:'',
    photo3:'',
    active: true
   
    }
  }
  /**
   * Operations add and update with firestore
   * @param form 
   */
  isActive(h: Hotels){
    h.active = !h.active;
    this.hotelsService.updateHotel(h);
  }
  onSubmit(form: NgForm){
    let data = Object.assign({}, form.value);
    if(form.value.key == null){
      data.active= true ;
      this.hotelsService.addHotel(data);
    } else{
      if(form.value.hotelsId !== ''){
        data.hotelsId= form.value.hotelsId;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.name !== ''){
        data.name= form.value.name;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.description !== ''){
        data.description = form.value.description ;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.category !== ''){
        data.category= form.value.category;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.services !== ''){
        data.services= form.value.services;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.latitude !== 0){
        data.latitude= form.value.latitude;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.longitude!== 0){
        data.longitude= form.value.longitude;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.state !== ''){
        data.state= form.value.state;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.city !== ''){ 
        data.city = form.value.city;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.stars !== 0){
        data.stars= form.value.stars;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.popularity !== 0){
        data.popularity= form.value.popularity;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.availability !== 0){
        data.availability= form.value.availability;
        this.hotelsService.updateHotel(data);
      }
      
      if(form.value.photos !== ''){
        data.photos= form.value.photos;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.photo1 !== ''){
        data.photo1= form.value.photo1;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.photo2 !== ''){
        data.photo2= form.value.photo2;
        this.hotelsService.updateHotel(data);
      }
      if(form.value.photo3 !== ''){
        data.photo3 = form.value.photo3;
        this.hotelsService.updateHotel(data);
      }
    }
   
        
    
    this.resetForm(form);
  
  } 

}

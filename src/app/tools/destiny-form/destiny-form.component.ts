import { Component, OnInit } from '@angular/core';
import {DestinyService} from 'src/app/services/destiny/destiny.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-destiny-form',
  templateUrl: './destiny-form.component.html',
  styleUrls: ['./destiny-form.component.scss']
})
export class DestinyFormComponent implements OnInit {

  constructor(private service : DestinyService) { }

  ngOnInit() {
    this.resetForm();
  
  }
  
  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
  
    this.service.formData={
      destinyId: null,
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
      hotel3: ''
    }
  }
  

}

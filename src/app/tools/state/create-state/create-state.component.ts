import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {StateService} from 'src/app/services/state/state.service';
import {States} from 'src/app/models/state';

@Component({
  selector: 'app-create-state',
  templateUrl: './create-state.component.html',
  styleUrls: ['./create-state.component.scss']
})
export class CreateStateComponent implements OnInit {

  constructor(private statesService: StateService) { }

  ngOnInit() {
    this.resetForm();
  }
  //Resets the value of the form
  resetForm(form?: NgForm){
  
    if(form!=null)
      form.resetForm();
    this.statesService.stateData={
      key: null,
      stateID: '',
      name: '',
      active : true,
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
      this.statesService.addState(data);
    } else{
      if(form.value.stateID !== ''){
        data.stateID= form.value.stateID ;
        this.statesService.updateState(data);
      }
      if(form.value.name !== ''){
        data.name= form.value.name ;
        this.statesService.updateState(data);
      }
      
    }
   
    
    this.resetForm(form);
  
  } 


}

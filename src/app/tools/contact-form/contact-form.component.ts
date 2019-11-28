import { Component, OnInit } from '@angular/core';
import {MessagesService} from './../../services/messages/messages.service';
import {Inbox} from './../../models/inbox/message';
import {FormsModule, NgForm} from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  
  name: string;
  email: string;
  message: string;

  constructor(public messageService : MessagesService) {}

  ngOnInit() {}
  resetForm(){
    this.name = '';
    this.email ='';
    this.message = '';
    }

  /**
   * Process the form we have, send it to the back end service
   */
  onSubmit(form: NgForm) {
    //We create an object
    let data = Object.assign({}, form.value);
    //Assign the value of the form
    data.answered= false ;
    data.sender = this.name;
    data.email = this.email;
    data.message = this.message;
    //Send it to the backend
    this.messageService.addMessage(data);
    const allInfo = `Su mensaje ha sido enviado con éxito`;
    alert(allInfo); 
    //Resste the form
    this.resetForm();
  }


}

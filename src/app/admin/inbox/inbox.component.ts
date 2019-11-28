import { Component, OnInit } from '@angular/core';
import {MessagesService} from 'src/app/services/messages/messages.service';
import {Inbox} from 'src/app/models/inbox/message';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  messages : Inbox[];

  constructor(private inboxService: MessagesService, private firestore: AngularFirestore, public auth: AuthService) { }

  ngOnInit() {
    this.inboxService.getMessages().subscribe(
      message=>{
        this.messages = message;
      }
    )
  }
  isActive(m: Inbox){
    m.answered =!m.answered;
    this.inboxService.updateMessage(m);
  }
  onDelete(key:string){
    if(confirm("¿Estas seguro que quieres eliminar este mensaje?")){
      this.firestore.doc('Inbox/'+key).delete();
    }
      
  
  }

}

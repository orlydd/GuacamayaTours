import { Component, OnInit, Inject , TemplateRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Hotels } from '../models/Hotels.model';
import { HotelsService } from '../services/Hotelsservice/hotels.service';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
modalRef: BsModalRef;
constructor(private modalService: BsModalService) {}

ngOnInit() {
}
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}
}
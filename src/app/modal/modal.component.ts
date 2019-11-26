import { Component, OnInit, Inject , TemplateRef , Input } from '@angular/core';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() i1: string;
  @Input() i2: number;
modalRef: BsModalRef;
config = {
  animated: true,
  keyboard: true,
  backdrop: true,
  class: "guacamodal"
};
constructor(private modalService: BsModalService) {}

ngOnInit() {
}
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, this.config);
}

}
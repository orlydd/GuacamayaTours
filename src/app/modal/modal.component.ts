import { Component, OnInit, Inject , TemplateRef , Input } from '@angular/core';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { timeout } from 'q';
import { HotelsSeeMoreComponent} from '../Hotel Components/hotels-see-more/hotels-see-more.component'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() i1: string;
  @Input() i2: number;
  @Input() lat1: number;
  @Input() lng1: number;
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
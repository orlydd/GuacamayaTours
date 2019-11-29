import { Component, OnInit, Inject , TemplateRef , Input } from '@angular/core';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { timeout } from 'q';
import { HotelsSeeMoreComponent} from '../Hotel Components/hotels-see-more/hotels-see-more.component'
import { ItineraryService } from '../services/itinerary/itinerary.service'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() i1: string;
  @Input() i2: string;
  @Input() lat1: number;
  @Input() lng1: number;
  @Input() roomPrice: number;
  message:any;
  message2:any;
modalRef: BsModalRef;
config = {
  animated: true,
  keyboard: true,
  backdrop: true,
  class: "guacamodal"
};
constructor(private modalService: BsModalService, private ItineraryService: ItineraryService) {}

ngOnInit() {this.ItineraryService.currentMessage2.subscribe(message2 => this.message2 = message2)
  this.ItineraryService.currentMessage.subscribe(message => this.message = message)
}
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, this.config);

}

}
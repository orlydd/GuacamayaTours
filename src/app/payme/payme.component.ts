import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Hotels} from '../models/Hotels.model';
import {HotelsService} from '../services/Hotelsservice/hotels.service';
import { ItineraryService } from '../services/itinerary/itinerary.service';
declare var paypal;

@Component({
  selector: 'app-payme',
  templateUrl: './payme.component.html',
  styleUrls: ['./payme.component.scss']
})
export class PaymeComponent implements OnInit {
  message:any;
  message2:any;
  @ViewChild('paypal', { static: true}) paypalElement: ElementRef;
  constructor(private ItineraryService: ItineraryService){}
  paidFor=false;
  h:any;
  description:any="omega";
  price:number=15;
  ngOnInit() {this.ItineraryService.currentMessage2.subscribe(message2 => this.message2 = message2)
    this.ItineraryService.currentMessage.subscribe(message => this.message = message)

    paypal
      .Buttons({
        createOrder: (data, actions) => {
            return actions.order.create({
                purchase_units:[
                  {description: this.description,
                  amount: {
                    currency_code: 'USD',
                    value: this.price
                  }}
                ]
            });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

}

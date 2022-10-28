import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(
    private cartService_Instance : CartService,
  ) { }

  ngOnInit(): void {
  }
  shippingCosts_show = this.cartService_Instance.getShippingPrices();

}

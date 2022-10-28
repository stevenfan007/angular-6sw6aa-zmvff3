import { Component, OnInit } from '@angular/core';
import { Product, products_js } from '../products';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

// import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
})
export class MyCartComponent implements OnInit {
  constructor(
    private carService_Instance: CartService,
    private form_Instance: FormBuilder
  ) {}

  ngOnInit(): void {}

  items = this.carService_Instance.getItems();
  inputForm = this.form_Instance.group({
    name: '',
    address: '',
  });
  onSubmit(): void {
    // Process checkout data here
    this.items = this.carService_Instance.clearCart();
    console.warn('Your order has been submitted', this.inputForm.value);
    this.inputForm.reset();
  }
}

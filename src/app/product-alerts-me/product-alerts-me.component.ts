import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { products_js, Product } from '../products';
@Component({
  selector: 'app-product-alerts-me',
  templateUrl: './product-alerts-me.component.html',
  styleUrls: ['./product-alerts-me.component.css']
})
export class ProductAlertsMeComponent implements OnInit {

  @Input() product_alertme!: Product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  

}

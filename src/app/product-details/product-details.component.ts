import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products_js } from '../products';

// import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product_detailtest: Product | undefined;
  constructor(private route: ActivatedRoute,
        // private route: ActivatedRoute,
    private cartService: CartService
    ) { }

    addToCart(product: Product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product_detailtest = products_js.find(product_from_click => product_from_click.id === productIdFromRoute);
  }

}

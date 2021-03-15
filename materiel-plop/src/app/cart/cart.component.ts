import { Component, OnInit } from '@angular/core';
import { CartProduct, CartService } from './cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mp-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  productList$: Observable<Array<CartProduct>>;

  total$: Observable<number>;

  productCount$: Observable<number>;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.productList$ = this.cartService.products$;
    this.total$ = this.cartService.total$;
    this.productCount$ = this.cartService.productsCount$;
  }

  updateProductQuantity(quantity: number, cartProduct: CartProduct) {
    if (quantity === 0) {
      this.cartService.remove(cartProduct);
    } else {
      this.cartService.updateProductQuantity(cartProduct, quantity);
    }
  }

  removeProduct(cartProduct: CartProduct): void {
    this.cartService.remove(cartProduct);
  }
}

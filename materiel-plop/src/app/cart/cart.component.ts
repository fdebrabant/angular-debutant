import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartProduct, CartService} from './cart.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'mp-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit, OnDestroy {

  private cartSubscription: Subscription;

  cartProducts: Array<CartProduct>;

  total: number;

  productCount: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartSubscription = this.cartService.productList.subscribe(productList => {
      this.cartProducts = productList;
      this.total = this.cartService.getTotal();
      this.productCount = this.cartService.getProductCount();
    });
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

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
}

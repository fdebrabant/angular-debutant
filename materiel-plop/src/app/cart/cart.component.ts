import {Component, OnInit} from '@angular/core';
import {CartProduct, CartService} from './cart.service';

@Component({
  selector: 'mp-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cartProducts: Array<CartProduct>;
  total: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartProducts = this.cartService.getList();
    this.total = this.cartService.getTotal();
  }

}

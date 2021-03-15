import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CartService} from '../cart.service';

@Component({
  selector: 'mp-cart-header-entry',
  styles: ['.badge {background-color: #2980b9; padding: 5px 10px}'],
  template: `
    <a class="nav-link" routerLink="/cart" routerLinkActive="active">
      <i class="bi bi-cart"></i>
      Panier <span class="badge">{{itemCount}}</span>
    </a>
  `
})
export class CartHeaderEntryComponent implements OnInit, OnDestroy {

  itemCount = 0;

  private cartSubscription: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.productList.subscribe(() => {
      this.itemCount = this.cartService.getProductCount();
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
}

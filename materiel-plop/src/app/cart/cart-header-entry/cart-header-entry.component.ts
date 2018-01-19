import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CartService} from '../cart.service';

@Component({
  selector: 'mp-cart-header-entry',
  styles: ['.badge {background-color: #2980b9; padding: 4px 7px 2px}'],
  template: `
    <a routerLink="/cart" routerLinkActive="active">
      <i class="glyphicon glyphicon-shopping-cart"></i>
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

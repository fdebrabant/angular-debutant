import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'mp-cart-header-entry',
  styles: [ '.badge {background-color: #2980b9; padding: 5px 10px}' ],
  template: `
    <a class="nav-link" routerLink="/cart" routerLinkActive="active">
      <i class="bi bi-cart"></i>
      Panier <span class="badge">{{itemCount$ | async}}</span>
    </a>
  `
})
export class CartHeaderEntryComponent implements OnInit {

  itemCount$: Observable<number>;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.itemCount$ = this.cartService.productsCount$;
  }
}

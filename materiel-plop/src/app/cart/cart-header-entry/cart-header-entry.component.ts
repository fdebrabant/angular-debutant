import { Component, OnInit } from '@angular/core';

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
export class CartHeaderEntryComponent {
  itemCount = 0;
}

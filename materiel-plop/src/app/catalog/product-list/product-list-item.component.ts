import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'mp-product-list-item',
  templateUrl: 'product-list-item.component.html'
})
export class ProductListItemComponent {
  @Input() product: Product;

  imageBasePath = '/assets/images/';

  rateRange(rating: number): Array<number> {
    return new Array(rating);
  }
}

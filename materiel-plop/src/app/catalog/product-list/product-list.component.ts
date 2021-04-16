import {Component, Input} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'mp-product-list',
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent {
  @Input() products: Array<Product>;
}

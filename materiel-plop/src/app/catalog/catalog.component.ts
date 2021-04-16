import {Component, OnInit} from '@angular/core';
import {Product} from './product.model';
import {ProductService} from './product.service';

@Component({
  selector: 'mp-catalog',
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {

  products: Array<Product>;

  minPrice = 0;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService
      .getList()
      .then((productList) => this.products = productList);
  }
}

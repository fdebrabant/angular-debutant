import {Component, OnInit} from '@angular/core';
import {Product} from '../catalog/product.model';
import {ProductService} from '../catalog/product.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public products: Array<Product>;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService
      .getHighLighted()
      .then((productList) => this.products = productList);
  }
}

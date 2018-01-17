import {Component} from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'mp-product-list',
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent {
  products: Array<Product> = [
    {title: 'Surface Book', price: 1401, image: 'surface-book.jpg', review: 15},
    {title: 'Macbook pro', price: 1699, image: 'macbook-pro.jpg', review: 10},
    {title: 'Lenovo Yoga book', price: 579, image: 'lenovo-yoga-book.jpg', review: 3}
  ];
}

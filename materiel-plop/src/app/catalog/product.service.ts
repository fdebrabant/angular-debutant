import {Injectable} from '@angular/core';
import {Product} from './product.model';

@Injectable()
export class ProductService {

  private products: Array<Product> = [
    {id: 1, title: 'Surface Book', price: 1401, image: 'surface-book.jpg', review: 15, rating: 5},
    {id: 2, title: 'Macbook pro', price: 1699, image: 'macbook-pro.jpg', review: 10, rating: 4},
    {id: 3, title: 'Lenovo Yoga book', price: 579, image: 'lenovo-yoga-book.jpg', review: 3, rating: 3},
    {id: 4, title: 'Surface pro 4', price: 934, image: 'surface-pro-4.jpg', rating: 4, review: 20},
    {id: 5, title: 'iMac', price: 1249, image: 'imac.jpg', rating: 4, review: 25},
    {id: 6, title: 'Surface Studio', price: 2999, image: 'surface-studio.jpg', rating: 5, review: 30}
  ];

  getHighLighted(): Promise<Product[]> {
    return new Promise((resolve) => resolve(this.products.slice(0, 3)));
  }

  getList(): Promise<Product[]> {
    return new Promise((resolve) => resolve(this.products));
  }
}

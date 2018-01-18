import {async, fakeAsync, tick} from '@angular/core/testing';
import {ProductService} from './product.service';
import {Product} from './product.model';

describe('ProductService', () => {

  let productService: ProductService;
  beforeEach(() => {
    productService = new ProductService();
  });

  it('Should load highlighted products', async(() => {
    productService
      .getHighLighted()
      .then(products => {
        expect(products.length).toBe(3);
      });
  }));

  it('Should load all products', fakeAsync(() => {
    let list: Array<Product>;
    productService.getList().then(products => list = products);
    tick();
    expect(list.length).toBe(6);
  }));
});

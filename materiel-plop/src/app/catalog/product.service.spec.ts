import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import {ProductService} from './product.service';
import {Product} from './product.model';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

const products = [
  {id: 1, title: 'Surface Book', price: 1401, image: 'surface-book.jpg', review: 15, rating: 5},
  {id: 2, title: 'Macbook pro', price: 1699, image: 'macbook-pro.jpg', review: 10, rating: 4},
  {id: 3, title: 'Lenovo Yoga book', price: 579, image: 'lenovo-yoga-book.jpg', review: 3, rating: 3},
];

describe('ProductService', () => {

  let productService: ProductService;
  let httpMock: HttpTestingController;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    productService = TestBed.inject(ProductService);
    httpMock = TestBed.inject<HttpTestingController>(HttpTestingController as any);
  });

  it('Should load highlighted products', waitForAsync(() => {
    // when
    productService
      .getHighLighted()
      .subscribe(productList => {

        // then
        expect(productList.length).toBe(2);
      });

    const request = httpMock.expectOne('/api/product/highlighted');
    request.flush([products[0], products[1]]);
    httpMock.verify();
  }));

  it('Should load all products', fakeAsync(() => {
    // given
    let list: Array<Product>;

    // when
    productService.getList().then(productList => list = productList);
    const request = httpMock.expectOne('/api/product');
    request.flush(products);
    tick();

    // then
    expect(list.length).toBe(3);
    httpMock.verify();
  }));

  it('Should load a product', fakeAsync(() => {
    // given
    let selectedProduct: Product;

    // when
    productService.get(1).then(product => selectedProduct = product);
    const request = httpMock.expectOne('/api/product/1');
    request.flush(products[0]);
    tick();

    // then
    expect(selectedProduct.id).toBe(1);
    httpMock.verify();
  }));
});

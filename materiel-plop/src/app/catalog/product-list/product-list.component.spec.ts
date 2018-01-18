import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ProductListComponent} from './product-list.component';
import {ProductListItemComponent} from './product-list-item.component';
import {By} from '@angular/platform-browser';
import {Product} from '../product.model';

const productList: Array<Product> = [
  {title: 'Test product', price: 100, image: 'product.jpg', review: 20, rating: 2},
  {title: 'Test product 2', price: 200, image: 'product2.jpg', review: 40, rating: 4},
  {title: 'Test product 3', price: 400, image: 'product3.jpg', review: 60, rating: 5}
];

describe('ProductListComponent (With dependency)', () => {

  let fixture: ComponentFixture<ProductListComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductListItemComponent]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    fixture.componentInstance.products = productList;
    fixture.detectChanges();
  });

  it('should display 3 items', () => {
    expect(fixture.debugElement.queryAll(By.css('mp-product-list-item')).length).toBe(3);
  });
});

describe('ProductListComponent (Shallow component tests)', () => {

  let fixture: ComponentFixture<ProductListComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    fixture.componentInstance.products = productList;
    fixture.detectChanges();
  });

  it('should display 3 items', () => {
    expect(fixture.debugElement.queryAll(By.css('mp-product-list-item')).length).toBe(3);
  });
});

@Component({selector: 'mp-product-list-item', template: ''})
class ProductListItemStubComponent {
  @Input() product: any;
}

describe('ProductListComponent (With component stub)', () => {

  let fixture: ComponentFixture<ProductListComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductListItemStubComponent]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    fixture.componentInstance.products = productList;
    fixture.detectChanges();
  });

  it('should display 3 items', () => {
    expect(fixture.debugElement.queryAll(By.css('mp-product-list-item')).length).toBe(3);
  });
});

import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ProductListComponent} from './product-list.component';
import {ProductListItemComponent} from './product-list-item.component';
import {By} from '@angular/platform-browser';

describe('ProductListComponent (With dependency)', () => {

  let fixture: ComponentFixture<ProductListComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductListItemComponent]
    });
    fixture = TestBed.createComponent(ProductListComponent);
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
  });

  it('should display 3 items', () => {
    expect(fixture.debugElement.queryAll(By.css('mp-product-list-item')).length).toBe(3);
  });
});


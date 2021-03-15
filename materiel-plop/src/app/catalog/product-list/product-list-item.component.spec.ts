import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ProductListItemComponent} from './product-list-item.component';
import {By} from '@angular/platform-browser';
import {Product} from '../product.model';
import {RouterTestingModule} from '@angular/router/testing';
import {LOCALE_ID} from '@angular/core';
import {CurrencyPipe, TitleCasePipe} from '@angular/common';

describe('ProductListItemComponent', () => {

  const productSample: Product = {
    id: 1, title: 'Test product', price: 100, image: 'product.jpg', review: 20, rating: 2
  };
  let fixture: ComponentFixture<ProductListItemComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductListItemComponent]
    });
    fixture = TestBed.createComponent(ProductListItemComponent);
    fixture.componentInstance.product = productSample;
    fixture.detectChanges();
  });

  it('should display product title', () => {
    const titleCasePipe = new TitleCasePipe();
    expect(fixture.debugElement.query(By.css('.caption h4 a')).nativeElement.textContent)
      .toEqual(titleCasePipe.transform(productSample.title));
  });

  it('should display product price', () => {
    const currencyPipe = new CurrencyPipe(TestBed.inject(LOCALE_ID));
    expect(fixture.debugElement.query(By.css('.caption h4 strong')).nativeElement.textContent)
      .toEqual(currencyPipe.transform(productSample.price, 'EUR'));
  });

  it('should display product reviews number', () => {
    expect(fixture.debugElement.query(By.css('.ratings p.float-right')).nativeElement.textContent)
      .toEqual(`${productSample.review} reviews`);
  });

  it('should display product image', () => {
    expect(fixture.debugElement.query(By.css('img')).nativeElement.src)
      .toEqual(document.location.origin + '/assets/images/' + fixture.componentInstance.product.image);
  });

  it('should display right number of stars', () => {
    expect(fixture.debugElement.queryAll(By.css('.bi-star-fill')).length).toEqual(2);
  });
});

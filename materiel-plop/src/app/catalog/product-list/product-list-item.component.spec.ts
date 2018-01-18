import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ProductListItemComponent} from './product-list-item.component';
import {By} from '@angular/platform-browser';
import {Product} from '../product.model';

describe('ProductListItemComponent', () => {

  const productSample: Product = {title: 'Test product', price: 100, image: 'product.jpg', review: 20, rating: 2};
  let fixture: ComponentFixture<ProductListItemComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListItemComponent]
    });
    fixture = TestBed.createComponent(ProductListItemComponent);
    fixture.componentInstance.product = productSample;
    fixture.detectChanges();
  });

  it('should display product title', () => {
    expect(fixture.debugElement.query(By.css('.caption h4 a')).nativeElement.textContent)
      .toEqual(productSample.title);
  });

  it('should display product price', () => {
    expect(fixture.debugElement.query(By.css('.caption h4 strong')).nativeElement.textContent)
      .toEqual(`${productSample.price} €`);
  });

  it('should display product reviews number', () => {
    expect(fixture.debugElement.query(By.css('.ratings p.pull-right')).nativeElement.textContent)
      .toEqual(`${productSample.review} reviews`);
  });

  it('should display product image', () => {
    expect(fixture.debugElement.query(By.css('img')).nativeElement.src)
      .toEqual(document.location.origin + '/assets/images/' + fixture.componentInstance.product.image);
  });

  it('should display right number of stars', () => {
    expect(fixture.debugElement.queryAll(By.css('.glyphicon-star')).length).toEqual(2);
  });
});

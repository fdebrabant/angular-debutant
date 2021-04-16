import { Injectable } from '@angular/core';
import { Product } from '../catalog/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CartProduct {
  product: Product;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products$: Observable<Array<CartProduct>>;

  productsCount$: Observable<number>;

  total$: Observable<number>;

  private cartProducts$: BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>([]);

  constructor() {
    this.products$ = this.cartProducts$;
    this.total$ = this.cartProducts$.pipe(
      map(products => products.reduce((sum, cartProduct): number => sum += (cartProduct.product.price * cartProduct.count), 0))
    );
    this.productsCount$ = this.cartProducts$.pipe(
      map(products => products.reduce((count, cartProduct: CartProduct): number => count += cartProduct.count, 0))
    );
  }

  add(cartProduct: CartProduct) {
    const cartProducts = this.cartProducts$.getValue();
    const selectedProduct = cartProducts.find((item) => item.product.id === cartProduct.product.id);
    if (selectedProduct) {
      selectedProduct.count += cartProduct.count;
    } else {
      cartProducts.push(cartProduct);
    }
    this.cartProducts$.next(cartProducts);
  }

  remove(cartProduct: CartProduct): void {
    const cartProducts = this.cartProducts$.getValue();
    cartProducts.splice(cartProducts.indexOf(cartProduct), 1);
    this.cartProducts$.next(cartProducts);
  }

  updateProductQuantity(cartProduct: CartProduct, quantity: number): void {
    const cartProducts = this.cartProducts$.getValue();
    const selectedProduct = cartProducts.find((item) => item.product.id === cartProduct.product.id);
    if (selectedProduct) {
      selectedProduct.count = quantity;
      this.cartProducts$.next(cartProducts);
    }
  }
}

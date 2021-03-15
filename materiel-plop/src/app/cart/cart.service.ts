import { Injectable } from '@angular/core';
import { Product } from '../catalog/product.model';
import { BehaviorSubject, Subject } from 'rxjs';

export interface CartProduct {
  product: Product;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productList: Subject<CartProduct[]> = new BehaviorSubject<CartProduct[]>([]);
  private cartProducts: Array<CartProduct> = [];

  getList(): Array<CartProduct> {
    return this.cartProducts;
  }

  add(cartProduct: CartProduct) {
    const selectedProduct = this.findCartProduct(cartProduct);
    if (selectedProduct) {
      selectedProduct.count += cartProduct.count;
    } else {
      this.cartProducts.push(cartProduct);
    }
    this.productList.next(this.cartProducts);
  }

  remove(cartProduct: CartProduct): void {
    this.cartProducts.splice(this.cartProducts.indexOf(cartProduct), 1);
    this.productList.next(this.cartProducts);
  }

  getProductCount(): number {
    return this.cartProducts.reduce((count, cartProduct: CartProduct): number => count += cartProduct.count, 0);
  }

  getTotal(): number {
    return this.cartProducts
      .reduce((sum, cartProduct): number => sum += (cartProduct.product.price * cartProduct.count), 0);
  }

  updateProductQuantity(cartProduct: CartProduct, quantity: number): void {
    const selectedProduct = this.findCartProduct(cartProduct);
    if (selectedProduct) {
      selectedProduct.count = quantity;
      this.productList.next(this.cartProducts);
    }
  }

  private findCartProduct(cartProduct: CartProduct): CartProduct {
    return this.cartProducts.find((registeredCartProduct: CartProduct) => registeredCartProduct.product.id === cartProduct.product.id);
  }
}

import {Injectable} from '@angular/core';
import {Product} from '../catalog/product.model';

export interface CartProduct {
  product: Product;
  count: number;
}

@Injectable()
export class CartService {

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
  }

  remove(cartProduct: CartProduct): void {
    this.cartProducts.splice(this.cartProducts.indexOf(cartProduct), 1);
  }

  getProductCount(): number {
    return this.cartProducts.reduce((count, cartProduct: CartProduct): number => {
      return count += cartProduct.count;
    }, 0);
  }

  getTotal(): number {
    return this.cartProducts.reduce((total: number, cartProduct: CartProduct): number => {
      return total += (cartProduct.product.price * cartProduct.count);
    }, 0);
  }

  updateProductQuantity(cartProduct: CartProduct, quantity: number): void {
    const selectedProduct = this.findCartProduct(cartProduct);
    if (selectedProduct) {
      selectedProduct.count = quantity;
    }
  }

  private findCartProduct(cartProduct: CartProduct): CartProduct {
    return this.cartProducts.find((registeredCartProduct: CartProduct) => {
      return registeredCartProduct.product.id === cartProduct.product.id;
    });
  }
}

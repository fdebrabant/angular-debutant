import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {CartRoutingModule} from './cart-routing.module';
import {CartService} from "./cart.service";

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [CartComponent],
  providers: [CartService]
})
export class CartModule { }

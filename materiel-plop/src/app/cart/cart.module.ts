import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {CartRoutingModule} from './cart-routing.module';
import {CartService} from './cart.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ],
  declarations: [CartComponent],
  providers: [CartService]
})
export class CartModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartHeaderEntryComponent} from './cart-header-entry.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CartHeaderEntryComponent],
  exports: [CartHeaderEntryComponent]
})
export class CartHeaderEntryModule {
}

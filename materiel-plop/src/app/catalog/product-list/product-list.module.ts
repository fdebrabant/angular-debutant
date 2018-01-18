import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListItemComponent} from './product-list-item.component';
import {ProductListComponent} from './product-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductListComponent,
    ProductListItemComponent
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductListModule {
}

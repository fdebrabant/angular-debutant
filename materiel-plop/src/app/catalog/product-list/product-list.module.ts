import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListItemComponent} from './product-list-item.component';
import {ProductListComponent} from './product-list.component';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
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

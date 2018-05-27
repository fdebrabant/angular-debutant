import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogRoutingModule} from './catalog-routing.module';
import {CatalogComponent} from './catalog.component';
import {ProductListModule} from './product-list/product-list.module';
import {MenuItem, MenuService} from '../layout/menu/menu.service';
import {ProductService} from './product.service';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CatalogRoutingModule,
    ProductListModule,
    SharedModule
  ],
  declarations: [
    CatalogComponent,
    ProductDetailComponent
  ]
})
export class CatalogModule {
  constructor(menuService: MenuService) {
    menuService.register(new MenuItem('Catalogue', '/catalog'));
  }
}

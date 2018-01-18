import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogRoutingModule} from './catalog-routing.module';
import {CatalogComponent} from './catalog.component';
import {ProductListModule} from './product-list/product-list.module';
import {MenuItem, MenuService} from '../layout/menu/menu.service';
import {ProductService} from './product.service';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    ProductListModule
  ],
  declarations: [
    CatalogComponent
  ],
  providers: [
    ProductService
  ]
})
export class CatalogModule {
  constructor(menuService: MenuService) {
    menuService.register(new MenuItem('Catalogue', '/catalog'));
  }
}

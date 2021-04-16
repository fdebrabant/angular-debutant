import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MenuService, MenuItem} from '../layout/menu/menu.service';
import {SharedModule} from '../shared/shared.module';
import {ProductListModule} from '../catalog/product-list/product-list.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule,
    ProductListModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
  constructor(menuService: MenuService) {
    menuService.register(new MenuItem('Home', '/home'));
  }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MenuService, MenuItem} from '../layout/menu/menu.service';
import {ProductListComponent} from './product-list.component';
import {ProductListItemComponent} from './product-list-item.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductListItemComponent
  ]
})
export class HomeModule {
  constructor(menuService: MenuService) {
    menuService.register(new MenuItem('Home', '/home'));
  }
}

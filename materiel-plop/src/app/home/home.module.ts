import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MenuService, MenuItem} from '../layout/menu/menu.service';

@NgModule({
  imports: [
    HomeRoutingModule
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

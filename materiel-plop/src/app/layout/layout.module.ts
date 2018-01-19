import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PageNotFoundComponent} from './not-found.component';

import {MenuService} from './menu/menu.service';
import {CartHeaderEntryModule} from '../cart/cart-header-entry/cart-header-entry.module';

@NgModule({
  imports: [
    LayoutRoutingModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CartHeaderEntryModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  exports: [
    LayoutComponent
  ],
  providers: [MenuService]
})
export class LayoutModule {
}

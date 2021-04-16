import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PageNotFoundComponent} from './not-found.component';

import {CartHeaderEntryModule} from '../cart/cart-header-entry/cart-header-entry.module';

@NgModule({
  imports: [
    LayoutRoutingModule,
    CommonModule,
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
  ]
})
export class LayoutModule {
}

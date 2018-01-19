import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {LayoutModule} from './layout/layout.module';
import {HomeModule} from './home/home.module';
import {CatalogModule} from './catalog/catalog.module';
import {AccountModule} from './account/account.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CatalogModule,
    AccountModule,
    CartModule,
    LayoutModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeFr);
  }
}

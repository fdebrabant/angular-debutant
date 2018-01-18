import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {LayoutModule} from './layout/layout.module';
import {HomeModule} from './home/home.module';
import {CatalogModule} from './catalog/catalog.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CatalogModule,
    LayoutModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

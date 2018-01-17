import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {LayoutModule} from './layout/layout.module';
import {HomeModule} from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LayoutModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

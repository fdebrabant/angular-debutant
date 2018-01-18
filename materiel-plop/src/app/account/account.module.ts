import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MenuService, MenuItem} from '../layout/menu/menu.service';

import {AccountRoutingModule} from './account-routing.module';
import {AccountCreateComponent} from './account-create.component';
import {AccountComponent} from './account.component';

@NgModule({
  imports: [
    AccountRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AccountCreateComponent,
    AccountComponent
  ]
})
export class AccountModule {
  constructor(menuService: MenuService) {
    menuService.register(new MenuItem('Créer un compte', 'account/create', 20));
  }
}

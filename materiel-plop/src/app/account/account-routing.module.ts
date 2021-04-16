import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountCreateComponent} from './account-create.component';
import {AccountComponent} from './account.component';

const routes: Routes = [
  {path: 'account', component: AccountComponent},
  {path: 'account/create', component: AccountCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}

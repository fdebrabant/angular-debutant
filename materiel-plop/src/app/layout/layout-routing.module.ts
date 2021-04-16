import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './not-found.component';

export const layoutRoutes: Routes = [
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}

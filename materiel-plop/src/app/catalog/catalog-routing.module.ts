import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CatalogComponent} from './catalog.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {
}

import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'mp-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  private routeParamSubscription: any;

  quantity = 0;

  product: Product = {
    id: 1,
    title: 'Surface Studio',
    price: 2999,
    image: 'surface-studio.jpg',
    rating: 5,
    review: 30
  };

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.routeParamSubscription = this.route.params.subscribe(params => {
      this.productService.get(params['id'])
        .then((product: Product) => this.product = product);
    });
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }

  rateRange(rating: number) {
    return new Array(rating);
  }
}

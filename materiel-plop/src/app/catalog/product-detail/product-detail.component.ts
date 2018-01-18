import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product.model';

@Component({
  selector: 'mp-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  private routeParamSubscription: any;
  product: Product = {
    id: 1,
    title: 'Surface Studio',
    price: 2999,
    image: 'surface-studio.jpg',
    rating: 5,
    review: 30
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeParamSubscription = this.route.params.subscribe(params => {
      // TODO retrieve product from api (id: params['id'])
    });
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }

  rateRange(rating: number) {
    return new Array(rating);
  }
}

import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private resourceUrl = '/api/product';

  constructor(private httpService: HttpClient) {
  }

  getHighLighted(): Observable<Product[]> {
    return this.httpService.get<Product[]>(`${this.resourceUrl}/highlighted`);
  }

  getList(): Promise<Product[]> {
    return this.httpService.get<Product[]>(this.resourceUrl).toPromise();
  }

  get(productId: number): Promise<Product> {
    return this.httpService.get<Product>(`${this.resourceUrl}/${productId}`)
      .toPromise();
  }
}

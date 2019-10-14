import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IProduct} from '../_models/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private baseUrl = environment.apiBase + 'store/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl);
  }
}

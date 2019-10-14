import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IState} from '../_models/_interfaces/reception';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  constructor(private http: HttpClient) { }

  getStates(): Observable<IState[]> {
    return this.http.
      get<IState[]>('http://locationsng-api.herokuapp.com/api/v1/states');
  }
}

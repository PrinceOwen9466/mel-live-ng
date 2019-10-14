import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
import {IAccessToken, ILoginViewModel} from '../_models/_interfaces/reception';

const tokenKey = 'access_token';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  base = environment.apiBase + 'auth/';
  get token(): string {
    return localStorage.getItem(tokenKey);
  }

  get loggedIn(): boolean {
    return this.token && !this.jwt.isTokenExpired(this.token);
  }

  constructor(private http: HttpClient,
              private router: Router,
              private jwt: JwtHelperService) { }

  //#region Methods
  login(model: ILoginViewModel) {
    return this.http.post<IAccessToken>(this.base + 'login', model)
      .pipe(
        map((response) => {
          if (response) {
            localStorage.setItem(tokenKey, response.accessToken);
          }
        }));
  }

  async logout() {
    localStorage.removeItem(tokenKey);
    await this.router.navigate(['login']);
  }
  //#endregion
}

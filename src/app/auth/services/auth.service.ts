import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthApiService } from 'src/app/core/services/api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuth = new BehaviorSubject(Boolean(this.getAuthCookie()));

  public isAuth$ = this._isAuth.asObservable();

  constructor(
    private readonly _authApi: AuthApiService
  ) {}

  public login(login: string, password: string) {
    return this._authApi.auth(login, password);
  }

  public signup(login: string, password: string) {
    return this._authApi.signup(login, password);
  }

  public isAuth() {
    return this._isAuth.value;
  }

  public setAuth() {
    this._isAuth.next(true);
  }

  public logout() {
    this._isAuth.next(false);
  }

  private getAuthCookie() {
    const cookieArray = document.cookie?.match(new RegExp('(^| )' + 'session' + '=([^;]+)'));
    if (!cookieArray) {
      return cookieArray;
    }
    return  cookieArray[2]
  }

}

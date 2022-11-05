import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthApiService } from 'src/app/core/services/api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly _authApi: AuthApiService
  ) { }

  public login(login: string, password: string) {
    return this._authApi.auth(login, password);
  }

  public signup(login: string, password: string) {
    return this._authApi.signup(login, password);
  }
}

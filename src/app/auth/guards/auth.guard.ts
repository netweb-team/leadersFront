import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) { }

  public canActivate() {
    // if (!environment.production) {
    //   return true;
    // }
    console.log('auth', this.auth.isAuth())
    // return true;
    if (this.auth.isAuth()) {
      return true;
    } else {
      return this.router.parseUrl(`/auth`);
    }
  }

}

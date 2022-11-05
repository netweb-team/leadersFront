import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
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
    if (!environment.production) {
      return true;
    }
    if (this.auth.isAuth()) {
      return true;
    } else {
      return this.router.parseUrl(`/auth`);
    }
  }

}

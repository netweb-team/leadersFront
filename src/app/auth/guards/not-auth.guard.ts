import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  public constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) { }

  public canActivate() {
    if (!this.auth.isAuth()) {
      return true;
    } else {
      return this.router.parseUrl(`/start`);
    }
  }
}

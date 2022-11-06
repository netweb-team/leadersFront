import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpStatusCode,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public constructor(
    private readonly router: Router,
    private readonly auth: AuthService,
    ) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // const session = this.auth.session;

    let updatedRequest = request;

    // if (session) {
    //     updatedRequest = request.clone({
    //         setHeaders: {
    //             // eslint-disable-next-line @typescript-eslint/naming-convention, quote-props
    //             'Authorization': `Bearer ${session.accessToken}`,
    //         },
    //     });
    // }

    return next.handle(updatedRequest).pipe(
      map(result => {
        console.log(result);
        if ((result as any).body?.status === 403) {
          this.router.navigate(['auth']).catch(err => {
            // eslint-disable-next-line no-console
            console.error(err);
          });
        }
        return result;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          this.auth.logout();
          this.router.navigate(['auth']).catch(err => {
            // eslint-disable-next-line no-console
            console.error(err);
          });
        }
        return throwError(() => error);
      }),

    );
  }
}

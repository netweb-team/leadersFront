import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../models/pool';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private urlPrefix = `${environment.apiOrigin}/api`;

  constructor(
    private readonly http: HttpClient,
  ) {}


  public auth(login: string, password: string): Observable<ApiResponse<null>> {
    const url = `${this.urlPrefix}/auth`;

    return this.http.post<ApiResponse<null>>(url, {login, password});
  }

  public signup(login: string, password: string): Observable<ApiResponse<null>> {
    const url = `${this.urlPrefix}/signup`;

    return this.http.post<ApiResponse<null>>(url, {login, password});
  }

  public logout() {
    const url = `${this.urlPrefix}/auth`;
    return this.http.delete<ApiResponse<null>>(url);
  }

}

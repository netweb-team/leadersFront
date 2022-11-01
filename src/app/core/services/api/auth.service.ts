import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlPrefix = '/api/v1/auth'

  constructor(
      private readonly http: HttpClient,
  ) { }


  public postSessions(data: any): Observable<any> {
    const url = `${this.urlPrefix}`;

    return this.http.post<any>(url, '');
  }

  public getSession(data: any): Observable<any> {
    const url = `${this.urlPrefix}`;

    return this.http.get<any>(url);
  }

  public deleteSession(data: any): Observable<any> {
    const url = `${this.urlPrefix}`;

    return this.http.delete<any>(url);
  }

}

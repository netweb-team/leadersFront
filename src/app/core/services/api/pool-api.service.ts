import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse, PoolsResponse } from '../../models/pool';

@Injectable({
  providedIn: 'root'
})
export class PoolApiService {
  private urlPrefix = `${environment.apiOrigin}/api/pools`;

  constructor(
      private readonly http: HttpClient,
  ) { }


  public postPools(pools: FormData) {
    const url = `${this.urlPrefix}`;

    return this.http.post<ApiResponse<PoolsResponse>>(url, pools);
  }

}

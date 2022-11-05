import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EtalonWithAnalogs } from 'src/app/map/models/flat';
import { environment } from 'src/environments/environment';
import { ApiResponse, PoolsTable } from '../../models/pool';

@Injectable({
  providedIn: 'root'
})
export class PoolApiService {
  private urlPrefix = `${environment.apiOrigin}/api/pools`;

  constructor(
    private readonly http: HttpClient,
  ) {}


  public postPools(pools: FormData) {
    const url = `${this.urlPrefix}`;

    return this.http.post<ApiResponse<PoolsTable>>(url, pools);
  }

  public getAnalogs(tableId: string, patternId: string) {
    const url = `${this.urlPrefix}/${tableId}`;
    let params = new HttpParams();

    params = params.set('pattern', patternId);

    return this.http.get<ApiResponse<EtalonWithAnalogs>>(url, { params });
  }

}

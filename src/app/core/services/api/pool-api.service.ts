import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArchivePool, EtalonWithAnalogs, Row } from 'src/app/map/models/flat';
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

  public calcResult(tableId:string) {

    const url = `${this.urlPrefix}/${tableId}`;

    return this.http.post<ApiResponse<Row[]>>(url, {});
  }


  public download(tableId: string) {

    const url = `${this.urlPrefix}/${tableId}`;

    let params = new HttpParams();

    params = params.set('download', '1');

    return this.http.get(url, {params, responseType: 'blob' });
  }

  public changeAnalogState(tableId: string, analogId: string, enable: 'on' | 'off') {

    const url = `${this.urlPrefix}/${tableId}`;

    let params = new HttpParams();

    params = params.set('analog', analogId.toString());

    return this.http.put<ApiResponse<EtalonWithAnalogs>>(url, {} ,{params});
  }



  public changeCorrectionsState(tableId: string, body: { flat_id: number, corrections: { [key: string] : number}}) {

    const url = `${this.urlPrefix}/${tableId}`;

    let params = new HttpParams();

    params = params.set('correct', body.flat_id.toString());

    return this.http.put<ApiResponse<EtalonWithAnalogs>>(url, body.corrections ,{params});
  }


  public getArchive() {
    const url = `${this.urlPrefix}`;
    return this.http.get<ApiResponse<ArchivePool[]>>(url);
  }

  public getOneArchive(poolId: string) {
    const url = `${this.urlPrefix}/${poolId}`;
    return this.http.get<ApiResponse<ArchivePool>>(url);
  }

}

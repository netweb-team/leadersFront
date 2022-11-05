import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
import { EtalonWithAnalogs } from '../models/flat';
import * as _ from 'lodash';
import { EtalonMock } from './flat.mock';
import { PoolApiService } from 'src/app/core/services/api/pool-api.service';
import { ResultTableService } from 'src/app/result-table/services/result-table.service';

@Injectable({
  providedIn: 'root'
})
export class EtalonsService {

  private readonly _etalonsWithAnalogs$ = new BehaviorSubject<EtalonWithAnalogs[]>([]);

  public readonly etalonsWithAnalogs$ = this._etalonsWithAnalogs$.asObservable();

  public readonly etalons$ = this._etalonsWithAnalogs$.pipe(
    map(etalons => etalons.map(etalon => etalon.pattern)),
  )

  public readonly analogs$ = this._etalonsWithAnalogs$.pipe(
    map(etalons => _.chain(etalons)
      .map(etalon => etalon.analogs)
      .flatten()
      .value()
    ),
  )

  constructor(
    private readonly _poolsApi: PoolApiService,
    private readonly _resultTable: ResultTableService,
  ) {}

  public async findAnalogs(tableId: string, ids: string[]) {
    try {
      const result = await lastValueFrom(this._poolsApi.getAnalogs(tableId.toString(), ids[0]));
      this._etalonsWithAnalogs$.next([result.body]);
    } catch {
    }
  }

  public async calcResult(tableId: string) {
    try {
      const result = await lastValueFrom(this._poolsApi.calcResult(tableId.toString()));
      this._resultTable.setTable(result.body)
    } catch {

    }
  }

}

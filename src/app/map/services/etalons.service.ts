import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
import { EtalonWithAnalogs } from '../models/flat';
import * as _ from 'lodash';
import { EtalonMock } from './flat.mock';
import { PoolApiService } from 'src/app/core/services/api/pool-api.service';

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
  ) {}

  public async findAnalogs(tableId: string, ids: string[]) {
    try {
      const result = await lastValueFrom(this._poolsApi.getAnalogs(tableId.toString(), ids[0]));
      this._etalonsWithAnalogs$.next([result.body]);
    } catch {
    }
  }

}

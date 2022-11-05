import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { PoolsTable } from 'src/app/core/models/pool';
import { PoolMock } from 'src/app/core/models/pool.mock';
import { PoolApiService } from 'src/app/core/services/api/pool-api.service';
import { Row } from 'src/app/map/models/flat';

@Injectable({
  providedIn: 'root'
})
export class ResultTableService {
  constructor(
    private readonly _poolsApi: PoolApiService,
    private readonly _router: Router,
  ) {}

  public uploadPool(formData: FormData) {
    return lastValueFrom(this._poolsApi.postPools(formData));
  }


  public checklistSelection = new SelectionModel<string>(true);


  private readonly _table$ = new BehaviorSubject<Row[] | null>([]);


  public table$ = this._table$.asObservable();


  public setTable(table: Row[]) {
    this._table$.next(table);
  }
  
}

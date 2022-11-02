import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { PoolsTableRow } from 'src/app/core/models/pool';
import { PoolMock } from 'src/app/core/models/pool.mock';
import { PoolApiService } from 'src/app/core/services/api/pool-api.service';

@Injectable({
  providedIn: 'root'
})
export class StartTableService {

  constructor(
    private readonly _poolsApi: PoolApiService,
  ) { }

  public uploadPool(formData: FormData) {
    return lastValueFrom(this._poolsApi.postPools(formData));
  }


  public checklistSelection = new SelectionModel<string>(true);


  private readonly _table$ = new BehaviorSubject<PoolsTableRow[]>([...PoolMock]);


  public table$ = this._table$.asObservable();


  public setTable(table: PoolsTableRow[]) {
    this._table$.next(table);
  }

}

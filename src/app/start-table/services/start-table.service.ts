import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { PoolsTable, PoolsTableRow } from 'src/app/core/models/pool';
import { PoolMock } from 'src/app/core/models/pool.mock';
import { PoolApiService } from 'src/app/core/services/api/pool-api.service';

@Injectable({
  providedIn: 'root'
})
export class StartTableService {

  constructor(
    private readonly _poolsApi: PoolApiService,
    private readonly _router: Router,
  ) {}

  public uploadPool(formData: FormData) {
    return lastValueFrom(this._poolsApi.postPools(formData));
  }


  public checklistSelection = new SelectionModel<string>(true);


  private readonly _table$ = new BehaviorSubject<PoolsTable | null>(null);


  public table$ = this._table$.asObservable();


  public setTable(table: PoolsTable) {
    this._table$.next(table);
  }

  public getTableId() {
    return this._table$.value?.id;
  }


  public goToMap() {
    const tableId = this.getTableId();
    const patternId = this.checklistSelection.selected[0];
    console.log(tableId, patternId)
    if (!tableId || !patternId) {
      return;
    }
    this._router.navigate(['/map', tableId], { queryParams: { pattern: patternId } });
  }
}

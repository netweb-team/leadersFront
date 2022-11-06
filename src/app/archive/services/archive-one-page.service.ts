import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, BehaviorSubject } from 'rxjs';
import { PoolApiService } from 'src/app/core/services/api/pool-api.service';
import { ArchivePool, Row } from 'src/app/map/models/flat';

@Injectable({
  providedIn: 'root'
})
export class ArchiveOnePageService {
  constructor(
    private readonly _poolsApi: PoolApiService,
    private readonly _router: Router,
  ) {}

  public getOneArchive(poolId: string) {
    return lastValueFrom(this._poolsApi.getOneArchive(poolId));
  }

  private readonly _table$ = new BehaviorSubject<ArchivePool | null>(null);


  public table$ = this._table$.asObservable();


  public setTable(table: ArchivePool) {
    this._table$.next(table);
  }

}

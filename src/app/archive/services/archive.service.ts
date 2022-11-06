import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { PoolApiService } from 'src/app/core/services/api/pool-api.service';
import { ArchivePool } from 'src/app/map/models/flat';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  constructor(
    private readonly _poolsApi: PoolApiService,
    private readonly _router: Router,
  ) {}


  private readonly _table$ = new BehaviorSubject<ArchivePool[] | null>([]);


  public table$ = this._table$.asObservable();


  public setTable(table: ArchivePool[]) {
    this._table$.next(table);
  }

  public getArchive() {
    return lastValueFrom(this._poolsApi.getArchive());
  }


}

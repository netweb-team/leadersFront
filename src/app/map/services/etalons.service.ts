import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { EtalonWithAnalogs } from '../models/flat';
import * as _ from 'lodash';
import { EtalonMock } from './flat.mock';

@Injectable({
  providedIn: 'root'
})
export class EtalonsService {

  private readonly _etalonsWithAnalogs$ = new BehaviorSubject<EtalonWithAnalogs[]>([EtalonMock]);

  public readonly etalonsWithAnalogs$ = this._etalonsWithAnalogs$.asObservable();

  public readonly etalons$ = this._etalonsWithAnalogs$.pipe(
    map(etalons => etalons.map(etalon => etalon.etalon)),
  )

  public readonly analogs$ = this._etalonsWithAnalogs$.pipe(
    map(etalons => _.chain(etalons)
      .map(etalon => etalon.analogs)
      .flatten()
      .value()
    ),
  )
  constructor() {}

}

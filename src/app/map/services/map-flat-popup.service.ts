import { Injectable, NgZone } from '@angular/core';
import { timeStamp } from 'console';
import { BehaviorSubject } from 'rxjs';
import { Row, Flat, EtalonWithAnalogs } from '../models/flat';

@Injectable({
  providedIn: 'root'
})
export class MapFlatPopupService {


  private readonly _popupFlatData$ = new BehaviorSubject<{ etalon: EtalonWithAnalogs; analog: Row } | null>(null);

  public readonly popupFlatData$ = this._popupFlatData$.asObservable();


  constructor(
    private readonly zone: NgZone,
  ) {
    this.popupFlatData$.subscribe(res => console.log(res))
  }

  public openPopup(analog: Row, etalon: EtalonWithAnalogs) {
    console.log('open popup')
    this.zone.run(() =>
      this._popupFlatData$.next({ analog, etalon }))
  }
}

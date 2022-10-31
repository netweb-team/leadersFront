import { Injectable, NgZone } from '@angular/core';
import { timeStamp } from 'console';
import { BehaviorSubject } from 'rxjs';
import { Flat } from '../models/flat';

@Injectable({
  providedIn: 'root'
})
export class MapFlatPopupService {


  private readonly _popupFlatData$ = new BehaviorSubject<Flat | null>(null);

  public readonly popupFlatData$ = this._popupFlatData$.asObservable();


  constructor(
    private readonly zone: NgZone,
  ) {
    this.popupFlatData$.subscribe(res => console.log(res))
  }

  public openPopup(flat: Flat) {
    console.log('open popup')
    this.zone.run(() =>
      this._popupFlatData$.next(flat))
  }
}

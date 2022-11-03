import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PoolsTableRow } from 'src/app/core/models/pool';
import { MapFlatPopupService } from '../../services/map-flat-popup.service';
import { MapService } from '../../services/map.service';


export const coefNames = new Map<string, string>([
  ['k', 'Кухня'],
  ['f', 'Этажность'],
])
export interface CompareTableRow {
  type: string;
}






@Component({
  selector: 'app-flat-popup',
  templateUrl: './flat-popup.component.html',
  styleUrls: ['./flat-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlatPopupComponent implements OnInit {

  public columns = ['param','etalon', 'analog', 'coef'];

  public data = ['k', 'f', 'r'];

  public getCoefNameByType(type:string) {
    return coefNames.get(type);
  }

  public getParamValue(flat: PoolsTableRow, type: string) {
    return (flat as any)[type];
  }

  public getCoefValue(coef: any, type: string) {
    return 1;
  }

  public analog$ = this._popupData.popupFlatData$.pipe(
    map(popupData => popupData?.analog),
  )

  public etalon$ = this._popupData.popupFlatData$.pipe(
    map(popupData => popupData?.etalon),
  )

  constructor(
    public readonly _popupData: MapFlatPopupService,
    public readonly _map: MapService,
  ) {}

  ngOnInit(): void {
  }

}

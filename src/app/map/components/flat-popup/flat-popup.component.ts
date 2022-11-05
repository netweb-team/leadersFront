import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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

  public columns = ['param', 'etalon', 'analog', 'coef'];

  public data = ['k', 'f', 'm'];

  public form = this._fb.group({
    sale: 0,
    floor: 0,
    total: 0,
    kitchen: 0,
    balcony: 0,
    metro: 0,
    state: 0,
  })

  public getCoefNameByType(type: string) {
    return coefNames.get(type);
  }

  public getParamValue(flat: PoolsTableRow, type: string) {
    return (flat as any)[type];
  }

  public getCoefValue(coef: any, type: string) {
    return 1;
  }

  public getFormControl(type: string) {
    switch (type) {
      case 'k': return this.form.controls.kitchen as FormControl;
      case 'f': return this.form.controls.floor as FormControl;
      case 'm': return this.form.controls.metro as FormControl;
    }
    return null;
  }

  public analog$ = this._popupData.popupFlatData$.pipe(
    map(popupData => popupData?.analog),
  )

  public etalon$ = this._popupData.popupFlatData$.pipe(
    map(popupData => popupData?.etalon),
  )

  constructor(
    public readonly _popupData: MapFlatPopupService,
    private readonly _fb: FormBuilder,
    public readonly _map: MapService,
  ) {
    this._popupData.popupFlatData$.subscribe(flatData => {
      if (flatData) {
        const index = flatData.etalon.analogs.findIndex(analog => analog.id === flatData.analog.id)
        this.form.patchValue(flatData.etalon.coefs[index])
      }
    })
  }

  ngOnInit(): void {
  }

}

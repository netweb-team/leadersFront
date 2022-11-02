import * as L from 'leaflet';
import { Injectable } from '@angular/core';
import { lastValueFrom, of, Subscription } from 'rxjs';
import { Flat } from '../models/flat';
import { flatMock } from './flat.mock';
import { MatIconRegistry } from '@angular/material/icon';
import { AppInjector } from 'src/app/app/app.module';
import { MapFlatPopupService } from './map-flat-popup.service';


export const getMatIconRegistry = (): MatIconRegistry => AppInjector.get(MatIconRegistry);

export async function getSvgIconHTMLElement(svgIcon: string): Promise<SVGElement> {
  const matIconRegistry = getMatIconRegistry();
  return lastValueFrom(matIconRegistry.getNamedSvgIcon(svgIcon));
}

export async function getFlatMarker(flat: Flat, color: string) {
  const mainDiv = document.createElement('div');
  mainDiv.className = `flat-main-div`;

  const icon = await getSvgIconHTMLElement('marker');
  icon.setAttribute('fill', color);
  mainDiv.appendChild(icon);

  return new L.DivIcon({
    html: mainDiv,
    className: `flat-icon`,
    iconSize: L.point(14, 14),
  });
}

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private _map?: L.Map;

  private subscriptions: Subscription[] = [];

  private _layers = new Map<string, L.Layer>();

  constructor(
    private readonly _popups: MapFlatPopupService,
  ) {}

  public _analogs$ = of([...flatMock]);

  public _etalons$ = of([...flatMock]);

  public initializeMap(map: L.Map): void {
    this._map = map;
    this.subscriptions.push(
      this._analogs$.subscribe(flats => this.createFlatMarkers(flats, 'red')),
      this._etalons$.subscribe(flats => this.createFlatMarkers(flats, 'blue'))
    )
  }

  public disposeMap() {
    this._map = undefined;
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
    this.subscriptions = [];
  }


  private createFlatMarkers(flats: Flat[], color: string) {
    console.log(flats)
    for (const flat of flats) {
      getFlatMarker(flat, color).then(icon => {
        const marker = new L.Marker(
          new L.LatLng(flat.lat, flat.lng),
          {
            icon,
          }
        )
        this._layers.set(flat.id, marker);
        this._map?.addLayer(marker);
        marker.on('click', () => this._popups.openPopup(flat));
      }).catch()
    }
  }
}

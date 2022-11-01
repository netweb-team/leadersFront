import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private _map?: L.Map;

  constructor() { }

  public initializeMap(map: L.Map): void {
    this._map = map;
  }


  public disposeMap() {
    this._map = undefined;
  }

}

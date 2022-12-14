import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../../services/map.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  private map?: L.Map;

  public options: L.MapOptions = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 13,
    center: L.latLng(55.75124, 37.618423),
  };

  constructor(
    private readonly _map: MapService,
  ) {}

  ngOnInit(): void {
  }

  public onMapReady(event: any) {
    console.log(event);
    this._map.initializeMap(event as L.Map);
    this.map = event as L.Map;
  }

  public ngOnDestroy() {
    this._map.disposeMap();
  }


  public resize() {
    this.map?.invalidateSize();
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.map?.invalidateSize(), 0)
  }
}

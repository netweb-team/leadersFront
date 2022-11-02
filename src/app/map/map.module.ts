import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapRoutingModule } from './map-routing.module';
import { FlatPopupComponent } from './components/flat-popup/flat-popup.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    MapComponent,
    FlatPopupComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    LeafletModule,
    MatIconModule,
  ],
  exports: [
    MapComponent,
],
})
export class MapModule { }

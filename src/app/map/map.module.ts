import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapRoutingModule } from './map-routing.module';



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    LeafletModule,
  ],
  exports: [
    MapComponent,
],
})
export class MapModule { }

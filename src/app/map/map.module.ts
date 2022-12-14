import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapRoutingModule } from './map-routing.module';
import { FlatPopupComponent } from './components/flat-popup/flat-popup.component';
import { MatIconModule } from '@angular/material/icon';
import { MapPageComponent } from './components/map-page/map-page.component';
import { EtalonCardComponent } from './components/etalon-card/etalon-card.component';
import { AnalogCardComponent } from './components/analog-card/analog-card.component';
import { FlatInfoComponent } from './components/flat-info/flat-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AngularResizeEventModule } from 'angular-resize-event';


@NgModule({
  declarations: [
    MapComponent,
    FlatPopupComponent,
    MapPageComponent,
    EtalonCardComponent,
    AnalogCardComponent,
    FlatInfoComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    LeafletModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AngularResizeEventModule,
  ],
  exports: [
    MapComponent,
],
})
export class MapModule { }

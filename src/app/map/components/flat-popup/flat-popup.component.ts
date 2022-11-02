import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MapFlatPopupService } from '../../services/map-flat-popup.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-flat-popup',
  templateUrl: './flat-popup.component.html',
  styleUrls: ['./flat-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlatPopupComponent implements OnInit {

  constructor(
    public readonly _popupData: MapFlatPopupService,
    public readonly _map: MapService,
  ) {}

  ngOnInit(): void {
  }

}

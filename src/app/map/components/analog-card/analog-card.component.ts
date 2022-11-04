import { Component, Input, OnInit } from '@angular/core';
import { Analog, Etalon } from '../../models/flat';
import { MapFlatPopupService } from '../../services/map-flat-popup.service';

@Component({
  selector: 'app-analog-card',
  templateUrl: './analog-card.component.html',
  styleUrls: ['./analog-card.component.scss']
})
export class AnalogCardComponent implements OnInit {

  @Input()
  public analog?: Analog;

  @Input()
  public etalon?: Etalon;

  constructor(
    public readonly popups: MapFlatPopupService,
  ) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { EtalonsService } from '../../services/etalons.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  constructor(
    public readonly etalons: EtalonsService,
  ) { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { PoolsTableRow } from 'src/app/core/models/pool';

@Component({
  selector: 'app-flat-info',
  templateUrl: './flat-info.component.html',
  styleUrls: ['./flat-info.component.scss']
})
export class FlatInfoComponent implements OnInit {

  @Input()
  public flatInfo?: PoolsTableRow;

  constructor() { }

  ngOnInit(): void {
  }

}

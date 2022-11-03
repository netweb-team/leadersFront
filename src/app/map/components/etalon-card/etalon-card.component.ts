import { Component, Input, OnInit } from '@angular/core';
import { EtalonWithAnalogs } from '../../models/flat';

@Component({
  selector: 'app-etalon-card',
  templateUrl: './etalon-card.component.html',
  styleUrls: ['./etalon-card.component.scss']
})
export class EtalonCardComponent implements OnInit {

  @Input()
  public etalon?: EtalonWithAnalogs;

  constructor() { }

  ngOnInit(): void {
  }

}

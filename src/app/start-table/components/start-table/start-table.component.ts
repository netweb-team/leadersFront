import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flat } from '../../models/start-table';

@Component({
  selector: 'app-start-table',
  templateUrl: './start-table.component.html',
  styleUrls: ['./start-table.component.scss']
})
export class StartTableComponent implements OnInit {

  public displayedColumns = ['check', 'index', 'address', 'rooms', 'floors'];

  public dataSource: Observable<unknown[]>= of([{}, {}, {} ]);

  constructor() { }

  ngOnInit(): void {
  }

}

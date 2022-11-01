import { Component, OnInit } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { PoolsTableRow } from 'src/app/core/models/pool';
import { PoolMock } from 'src/app/core/models/pool.mock';
import { Flat } from '../../models/start-table';

@Component({
  selector: 'app-start-table',
  templateUrl: './start-table.component.html',
  styleUrls: ['./start-table.component.scss']
})
export class StartTableComponent implements OnInit {

  public displayedColumns = ['check', 'index', 'address', 'rooms', 'floors'];

  public dataSource: Observable<Array<PoolsTableRow & {index: number}>>= of([...PoolMock]).pipe(
    map(pools => pools.map((poolRow, index) => ({
      ...poolRow,
      index: index + 1,
    })))
  );

  constructor() { }

  ngOnInit(): void {
  }

}

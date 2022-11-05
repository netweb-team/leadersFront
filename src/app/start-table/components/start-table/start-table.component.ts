import { Component, OnInit } from '@angular/core';
import { Observable, of, map, filter } from 'rxjs';
import { PoolsTableRow } from 'src/app/core/models/pool';
import { PoolMock } from 'src/app/core/models/pool.mock';
import { Flat } from '../../models/start-table';
import { StartTableService } from '../../services/start-table.service';

function isNotNill<T>(arg: T | null | undefined): arg is T {
  return arg !== null && arg !== undefined;
}

@Component({
  selector: 'app-start-table',
  templateUrl: './start-table.component.html',
  styleUrls: ['./start-table.component.scss']
})
export class StartTableComponent implements OnInit {

  public displayedColumns = ['check', 'index', 'address', 'rooms', 'floors'];

  public table$ = this.startTable.table$.pipe(
    map(table => table?.table),
  )

  public dataSource: Observable<Array<PoolsTableRow & { index: number }>> = this.table$.pipe(
    filter(isNotNill),
    map(pools => pools.map((poolRow, index) => ({
      ...poolRow,
      index: index + 1,
    })))
  );

  constructor(
    public readonly startTable: StartTableService,
  ) {}

  ngOnInit(): void {
  }

}

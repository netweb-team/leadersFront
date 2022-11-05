import { Component, OnInit } from '@angular/core';
import { map, Observable, filter } from 'rxjs';
import { PoolsTableRow } from 'src/app/core/models/pool';
import { isNotNill } from 'src/app/start-table/components/start-table/start-table.component';
import { ResultTableService } from '../../services/result-table.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent {

  public displayedColumns = [ 'index', 'address', 'rooms', 'floors', 'price', 'edit'];

  public table$ = this.resultTable.table$.pipe(
  )

  public dataSource: Observable<Array<PoolsTableRow & { index: number }>> = this.table$.pipe(
    filter(isNotNill),
    map(pools => pools.map((poolRow, index) => ({
      ...poolRow,
      index: index + 1,
    })))
  );

  constructor(
    public readonly resultTable: ResultTableService,
  ) {}

}

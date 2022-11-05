import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { PoolsTableRow } from 'src/app/core/models/pool';
import { ResultTableService } from 'src/app/result-table/services/result-table.service';
import { isNotNill } from 'src/app/start-table/components/start-table/start-table.component';

@Component({
  selector: 'app-archive-table',
  templateUrl: './archive-table.component.html',
  styleUrls: ['./archive-table.component.scss']
})
export class ArchiveTableComponent {

  public displayedColumns = [ 'index', 'name', 'count', 'edit'];

  public table$ = this.resultTable.table$.pipe(
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
    public readonly resultTable: ResultTableService,
  ) {}


}

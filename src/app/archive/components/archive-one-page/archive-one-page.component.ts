import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { PoolsTableRow } from 'src/app/core/models/pool';
import { ResultTableService } from 'src/app/result-table/services/result-table.service';
import { isNotNill } from 'src/app/start-table/components/start-table/start-table.component';
import { ArchiveOnePageService } from '../../services/archive-one-page.service';
import { ArchiveService } from '../../services/archive.service';

@Component({
  selector: 'app-archive-one-page',
  templateUrl: './archive-one-page.component.html',
  styleUrls: ['./archive-one-page.component.scss']
})
export class ArchiveOnePageComponent {

  public displayedColumns = [ 'index', 'address', 'rooms', 'floors', 'price'];

  public table$ = this.resultTable.table$.pipe(
    map(table => table?.table)
  )

  public dataSource: Observable<Array<PoolsTableRow & { index: number }>> = this.table$.pipe(
    filter(isNotNill),
    map(pools => pools.map((poolRow, index) => ({
      ...poolRow,
      index: index + 1,
    })))
  );

  constructor(
    public readonly resultTable: ArchiveOnePageService,
      public readonly _route: ActivatedRoute,
    ) {
      this._route.params
      .subscribe(params => {
        const tableId = params.poolId;
        this.getPool(tableId);
      })
    }

    public async getPool(id: string) {
      const result = await this.resultTable.getOneArchive(id);
        if (result.status === 200) {
          this.resultTable.setTable(result.body);
        }
    }
}

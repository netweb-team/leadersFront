import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { PoolsTableRow } from 'src/app/core/models/pool';
import { ArchivePool } from 'src/app/map/models/flat';
import { ResultTableService } from 'src/app/result-table/services/result-table.service';
import { isNotNill } from 'src/app/start-table/components/start-table/start-table.component';
import { ArchiveService } from '../../services/archive.service';

@Component({
  selector: 'app-archive-table',
  templateUrl: './archive-table.component.html',
  styleUrls: ['./archive-table.component.scss']
})
export class ArchiveTableComponent {

  public displayedColumns = [ 'index', 'name', 'count', 'datetime', 'edit'];

  public table$ = this.archive.table$.pipe(
    // map(table => table?.table),
  )

  public dataSource: Observable<Array<ArchivePool & { index: number }>> = this.table$.pipe(
    filter(isNotNill),
    map(pools => pools.map((poolRow, index) => ({
      ...poolRow,
      index: index + 1,
    })))
  );

  constructor(
    public readonly archive: ArchiveService,
    private readonly _route: ActivatedRoute,
  ) {
    this.getArchive()
  }

  public async getArchive() {
    const result = await this.archive.getArchive();

    if (result.status === 200) {
      this.archive.setTable(result.body);
    }
  }

}

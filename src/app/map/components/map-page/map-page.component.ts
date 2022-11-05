import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { EtalonsService } from '../../services/etalons.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  constructor(
    public readonly etalons: EtalonsService,
    public readonly _route: ActivatedRoute,
  ) {
    combineLatest([
      this._route.params,
      this._route.queryParams
    ])
    .subscribe(([params, queryParams]) => {
      const tableId = params.tableId;
      const patternIdQuery: string | string[] = queryParams.pattern;
      let patternId: string = patternIdQuery instanceof Array ? patternIdQuery[0] : patternIdQuery;
      this.etalons.findAnalogs(tableId, [patternId]);
    })
  }

  ngOnInit(): void {
  }

  public calcResult() {
    const tableId = this._route.snapshot.params.tableId;
    this.etalons.calcResult(tableId);
  }

}

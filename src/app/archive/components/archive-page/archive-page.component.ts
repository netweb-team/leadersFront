import { Component, OnInit } from '@angular/core';
import { ResultTableService } from 'src/app/result-table/services/result-table.service';

@Component({
  selector: 'app-archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.scss']
})
export class ArchivePageComponent implements OnInit {

  constructor(
    public readonly resultTable: ResultTableService,
  ) { }

  ngOnInit(): void {
  }

}

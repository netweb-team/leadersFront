import { Component, OnInit } from '@angular/core';
import { ResultTableService } from '../../services/result-table.service';

@Component({
  selector: 'app-result-table-page',
  templateUrl: './result-table-page.component.html',
  styleUrls: ['./result-table-page.component.scss']
})
export class ResultTablePageComponent implements OnInit {

  constructor(
    public readonly resultTable: ResultTableService, 
  ) { }

  ngOnInit(): void {
  }

}

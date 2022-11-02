import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StartTableService } from '../../services/start-table.service';

@Component({
  selector: 'app-start-table-page',
  templateUrl: './start-table-page.component.html',
  styleUrls: ['./start-table-page.component.scss']
})
export class StartTablePageComponent implements OnInit {

  constructor(
    private readonly _snackBar: MatSnackBar,
    private readonly _startTable: StartTableService,
  ) {}

  ngOnInit(): void {
  }


  public async onFileSelected(formData: FormData) {
    try {
      const resp = await this._startTable.uploadPool(formData);
      console.log(resp);
      if (resp.status === 201 && resp.body.table) {
        this._startTable.setTable(resp.body.table);
      }
    } catch {
      this._snackBar.open('Произошла непредвиденная ошибка')
    }
  }

}

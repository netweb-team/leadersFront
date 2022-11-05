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
    public readonly startTable: StartTableService,
  ) {}

  ngOnInit(): void {
  }


  public async onFileSelected(formData: FormData) {
    try {
      const resp = await this.startTable.uploadPool(formData);
      console.log(resp);
      if (resp.status === 201 && resp.body) {
        this.startTable.setTable(resp.body);
      }
    } catch {
      this._snackBar.open('Произошла непредвиденная ошибка')
    }
  }

}

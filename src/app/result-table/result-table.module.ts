import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultTablePageComponent } from './components/result-table-page/result-table-page.component';
import { ResultTableComponent } from './components/result-table/result-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { CoreModule } from '../core/core.module';
import { ResultTableRoutingModule } from './result-table-routing.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ResultTablePageComponent,
    ResultTableComponent
  ],
  imports: [
    CommonModule,
    ResultTableRoutingModule,
    MatTableModule,
    MatSnackBarModule,
    CoreModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
  ]
})
export class ResultTableModule { }

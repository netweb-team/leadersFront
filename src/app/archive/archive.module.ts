import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivePageComponent } from './components/archive-page/archive-page.component';
import { ArchiveTableComponent } from './components/archive-table/archive-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { CoreModule } from '../core/core.module';
import { ArchiveRoutingModule } from './archive-routing.module';



@NgModule({
  declarations: [
    ArchivePageComponent,
    ArchiveTableComponent
  ],
  imports: [
    CommonModule,
    ArchiveRoutingModule,
    MatTableModule,
    MatSnackBarModule,
    CoreModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
  ]
})
export class ArchiveModule { }

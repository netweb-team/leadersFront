import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartTablePageComponent } from './components/start-table-page/start-table-page.component';
import { StartTableComponent } from './components/start-table/start-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StartTableRoutingModule } from './start-table-routing.module';
import { CoreModule } from '../core/core.module';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    StartTablePageComponent,
    StartTableComponent
  ],
  imports: [
    StartTableRoutingModule,
    CommonModule,
    MatTableModule,
    MatSnackBarModule,
    CoreModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class StartTableModule {}

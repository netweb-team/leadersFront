import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SearchComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    FileUploadComponent,
  ]
})
export class CoreModule { }

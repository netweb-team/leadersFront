import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  @ViewChild('fileUpload')
  public fileInput!: ElementRef;


  @Output()
  public onFileSelected =  new EventEmitter<FormData>();


  constructor() {}

  public selectFile(event: any) {

      const file:File = event.target.files[0];

      if (file) {

          const formData = new FormData();

          formData.append("table", file);

          this.onFileSelected.emit(formData);
      }
      this.fileInput.nativeElement.value = '';
  }
}

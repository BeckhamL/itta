import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [FileUploaderComponent],
  declarations: [FileUploaderComponent],
})
export class CommonComponentModule {}
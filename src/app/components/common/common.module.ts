import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { MaterialCommonModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialCommonModule
  ],
  exports: [FileUploaderComponent],
  declarations: [FileUploaderComponent],
})
export class CommonComponentModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { MaterialCommonModule } from 'src/app/material/material.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialCommonModule
  ],
  exports: [FileUploaderComponent, HeaderComponent],
  declarations: [FileUploaderComponent, HeaderComponent],
})
export class CommonComponentModule {}
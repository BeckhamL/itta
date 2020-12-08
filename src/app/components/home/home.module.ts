import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonComponentModule } from '../common/common.module';
import { MaterialCommonModule } from 'src/app/material/material.module';
@NgModule({
  imports: [
    CommonModule,
    CommonComponentModule,
    MaterialCommonModule
  ],
  exports: [LandingPageComponent],
  declarations: [LandingPageComponent],
})
export class HomeCommonModule {}
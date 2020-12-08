import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonComponentModule } from '../common/common.module';
@NgModule({
  imports: [
    CommonModule,
    CommonComponentModule
  ],
  exports: [LandingPageComponent],
  declarations: [LandingPageComponent],
})
export class HomeCommonModule {}
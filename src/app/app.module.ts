import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCommonModule } from './components/home/home.module';
import { CommonComponentModule } from './components/common/common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCommonModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeCommonModule,
    CommonComponentModule,
    BrowserAnimationsModule,
    MaterialCommonModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

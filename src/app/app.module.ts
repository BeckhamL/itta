import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCommonModule } from './components/home/home.module';
import { CommonComponentModule } from './components/common/common.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeCommonModule, CommonComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

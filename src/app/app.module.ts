import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LucideAngularModule, Handshake } from 'lucide-angular';
import { SharedModule } from "./shared/shared.module";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Handshake }),
    SharedModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

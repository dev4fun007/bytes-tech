import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StickyHeaderModule, NavbarModule } from 'angular-bootstrap-md';
import { NavToolbarComponent } from './components/nav-toolbar/nav-toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FooterCommonComponent } from './components/footer-common/footer-common.component';

@NgModule({
  declarations: [
    AppComponent,
    NavToolbarComponent,
    FooterCommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    StickyHeaderModule,
    NavbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

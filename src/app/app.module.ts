import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ResortComponent } from './resorts/resort/resort.component';
import { ResortDetailComponent } from './resorts/resort-detail/resort-detail.component';
import { ResortEditComponent } from './resorts/resort-edit/resort-edit.component';
import { AddResortComponent } from './resorts/add-resort/add-resort.component';

@NgModule({
  declarations: [
    AppComponent,
    AddResortComponent,
    HeaderComponent,
    ResortsComponent,
    ResortComponent,
    ResortDetailComponent,
    ResortEditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

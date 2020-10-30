import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './resorts/hero.component';
import { FilterComponent } from './resorts/filter/filter.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ResortComponent } from './resorts/resort/resort.component';
import { ResortDetailComponent } from './resorts/resort-detail/resort-detail.component';
import { ResortEditComponent } from './resorts/resort-edit/resort-edit.component';
import { AddResortComponent } from './resorts/add-resort/add-resort.component';
import {FooterComponent} from './footer/footer.component';
import { ResortCardComponent } from './resorts/resort-card/resort-card.component';
import { ResortCardHighlightDirective } from './resorts/resort-card/resort-card-highlight.directive';
import { DropdownDirective } from './resorts/shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddResortComponent,
    FilterComponent,
    HeaderComponent,
    HeroComponent,
    ResortsComponent,
    ResortComponent,
    ResortDetailComponent,
    ResortEditComponent,
    FooterComponent,
    ResortCardComponent,
    ResortCardHighlightDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

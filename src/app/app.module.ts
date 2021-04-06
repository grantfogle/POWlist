import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddResortComponent } from './resorts/add-resort/add-resort.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './resorts/resorts-hero/hero.component';
import { FeedbackFormComponent } from './resorts/feedback-form/feedback-form.component';
import { FilterComponent } from './resorts/filter/filter.component';
import { HomeComponent } from './home/home.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ResortEditComponent } from './resorts/resort-edit/resort-edit.component';
import { ResortModalComponent } from './resorts/resort-modal/resort-modal.component';
import { ResortModalForecastComponent } from './resorts/resort-modal/resort-modal-forecast/resort-modal-forecast.component';
import { ResortModalInfoComponent } from './resorts/resort-modal/resort-modal-info/resort-modal-info.component';
import { ResortModalReviewsComponent } from './resorts/resort-modal/resort-modal-reviews/resort-modal-reviews.component';
import { ResortModalReviewFormComponent } from './resorts/resort-modal/resort-modal-review-form/resort-modal-review-form.component';
import { FooterComponent } from './footer/footer.component';
import { ResortCardComponent } from './resorts/resort-card/resort-card.component';
import { MapComponent } from './map/map.component';
import { ResortCardHighlightDirective } from './resorts/resort-card/resort-card-highlight.directive';
import { DropdownDirective } from './resorts/shared/dropdown.directive';
import { ModalService } from './services/modal.service';
import { DomService } from './services/dom.service';
import { ResortsService } from './services/resorts.service';
import { FilterService } from './services/filter.service';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    AddResortComponent,
    FeedbackFormComponent,
    FilterComponent,
    HeaderComponent,
    HeroComponent,
    HomeComponent,
    ResortsComponent,
    ResortEditComponent,
    FooterComponent,
    ResortCardComponent,
    ResortCardHighlightDirective,
    DropdownDirective,
    ResortModalComponent,
    ResortModalForecastComponent,
    ResortModalInfoComponent,
    ResortModalReviewsComponent,
    ResortModalReviewFormComponent,
    MapComponent
  ],
  entryComponents: [
    ResortModalComponent
  ],
  providers: [ModalService, DomService, FilterService, ResortsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

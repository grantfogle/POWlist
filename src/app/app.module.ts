import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddResortComponent } from './resorts/add-resort/add-resort.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './resorts/hero.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FilterComponent } from './resorts/filter/filter.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ResortComponent } from './resorts/resort/resort.component';
import { ResortDetailComponent } from './resorts/resort-detail/resort-detail.component';
import { ResortEditComponent } from './resorts/resort-edit/resort-edit.component';
import { ResortModalComponent } from './resorts/resort-modal/resort-modal.component';
import { FooterComponent } from './footer/footer.component';
import { ResortCardComponent } from './resorts/resort-card/resort-card.component';
import { ResortCardHighlightDirective } from './resorts/resort-card/resort-card-highlight.directive';
import { DropdownDirective } from './resorts/shared/dropdown.directive';
import { ModalService } from './services/modal.service';
import { DomService } from './services/dom.service';
import { ResortsService} from './services/resorts.service';
import { FilterService} from './services/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    AddResortComponent,
    FeedbackComponent,
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
    DropdownDirective,
    ResortModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents:[
    ResortModalComponent
  ],
  providers: [ModalService, DomService, FilterService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

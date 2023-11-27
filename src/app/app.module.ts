import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { SellComponent } from './pages/sell/sell.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/about/team/team.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import {register} from 'swiper/element/bundle';
import { WhoWeAreComponent } from './pages/about/who-we-are/who-we-are.component';
import { VisionMissionComponent } from './pages/about/vision-mission/vision-mission.component';
import { MeetBrokerComponent } from './pages/about/meet-broker/meet-broker.component';
import { InvestComponent } from './pages/invest/invest.component';
import {ToastrModule} from  'ngx-toastr';
import {ReactiveFormsModule} from '@angular/forms';
import { SinglePostComponent } from './pages/single-post/single-post.component'

register()
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    SellComponent,
    ContactComponent,
    CardComponent,
    AboutComponent,
    TeamComponent,
    PageNotFoundComponent,
    WhoWeAreComponent,
    VisionMissionComponent,
    MeetBrokerComponent,
    InvestComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

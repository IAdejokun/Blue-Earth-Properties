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
import { WhoWeAreComponent } from './pages/about/who-we-are/who-we-are.component';
import { VisionMissionComponent } from './pages/about/vision-mission/vision-mission.component';
import { MeetBrokerComponent } from './pages/about/meet-broker/meet-broker.component';
import { InvestComponent } from './pages/invest/invest.component';
import {ToastrModule} from  'ngx-toastr';
import {ReactiveFormsModule} from '@angular/forms';
import { BlogComponent } from './pages/blog/blog.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { HouseOneComponent } from './pages/property/house-one/house-one.component';
import { SamplePostComponent } from './pages/blogPost/sample-post/sample-post.component';
import {HttpClientModule} from '@angular/common/http';
import {SidebarjsModule} from 'ng-sidebarjs';
import { ModalComponent } from './components/modal/modal.component'
import { register } from 'swiper/element/bundle';
import { FeaturedComponent } from './components/featured/featured.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { FrequentlyAskedQuestionsComponent } from './pages/frequently-asked-questions/frequently-asked-questions.component';
import { MagazineComponent } from './pages/magazine/magazine.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router'
import {LoadingBarModule} from '@ngx-loading-bar/core'

// register Swiper custom elements
register();

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
    BlogComponent,
    ListingsComponent,
    HouseOneComponent,
    SamplePostComponent,
    ModalComponent,
    FeaturedComponent,
    ComingSoonComponent,
    FrequentlyAskedQuestionsComponent,
    MagazineComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    SidebarjsModule.forRoot(),
    LoadingBarRouterModule,
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

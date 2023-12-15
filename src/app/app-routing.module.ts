import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SellComponent } from './pages/sell/sell.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TeamComponent } from './pages/about/team/team.component';
import { MeetBrokerComponent } from './pages/about/meet-broker/meet-broker.component';
import { AboutComponent } from './pages/about/about.component';
import { VisionMissionComponent } from './pages/about/vision-mission/vision-mission.component';
import { WhoWeAreComponent } from './pages/about/who-we-are/who-we-are.component';
import { InvestComponent } from './pages/invest/invest.component';
import {BlogComponent} from './pages/blog/blog.component'

import { ListingsComponent } from './pages/listings/listings.component';
import { HouseOneComponent } from './pages/property/house-one/house-one.component';
import { SamplePostComponent } from './pages/blogPost/sample-post/sample-post.component';
import { ModalComponent } from './components/modal/modal.component';
import { FrequentlyAskedQuestionsComponent } from './pages/frequently-asked-questions/frequently-asked-questions.component';
import { MagazineComponent } from './pages/magazine/magazine.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full' 
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'sell',
    component:SellComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent,
    children:[
      {
        path:'',
        redirectTo:'who-we-are',
        pathMatch:'full'
      },
      {
        path:'team',
        component:TeamComponent
      },
      {
        path:'meet-broker',
        component:MeetBrokerComponent
      },
      {
        path:'vision-mission',
        component:VisionMissionComponent
      },
      {
        path:'who-we-are',
        component:WhoWeAreComponent
      },
    ]
  },
  {
    path:'invest',
    component:InvestComponent
  },
  {
    path:'faq',
    component:FrequentlyAskedQuestionsComponent
  },
  {
    path:'magazine',
    component:MagazineComponent
  },
  {
    path:'blog',
    component:BlogComponent,
  },
  {
    path:'listings',
    component:ListingsComponent,
  },
  {
    path:'listings/houseOne',
    component:HouseOneComponent
  },
  {
    path:'blog/post',
    component:SamplePostComponent
  },
  {
    path:'modal',
    component:ModalComponent
  },
  {
    path:'**',
    pathMatch:'full',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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

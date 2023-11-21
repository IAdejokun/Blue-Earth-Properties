import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SellComponent } from './pages/sell/sell.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TeamComponent } from './pages/about/team/team.component';


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
    children:[
      {
        path:'',
        redirectTo:'team',
        pathMatch:'full'
      },
      {
        path:'team',
        component:TeamComponent
      },
    ]
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

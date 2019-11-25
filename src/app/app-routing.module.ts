import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Auth Guard
import {AuthGuard} from './services/auth/auth.guard';
//Required components for which route services to be activated
import {ContactUsComponent } from './contact-us/contact-us.component'
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {SignInComponent} from  "./tools/sign-in/sign-in/sign-in.component";
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {DestinyCrudComponent} from './admin/destiny-crud/destiny-crud.component';
import {ItineraryCrudComponent} from './admin/itinerary-crud/itinerary-crud.component';
import{MyItineraryComponent} from './my-itinerary/my-itinerary.component'

import { ContactUsComponent } from './contact-us/contact-us.component'
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HotelsComponent } from './hotels/hotels.component'
import { DestiniesComponent } from './destinies/destinies.component'

const routes: Routes = [
 {
  path: '',
 component: HomeComponent
}, 
{
path :'seeItinerary',
component: MyItineraryComponent
},
{
  path:'Contacts',
  component: ContactUsComponent
},
{
  path:'Home',
  component: HomeComponent
},
{
  path:'AboutUs',
  component: AboutUsComponent
},
{ 
  path: 'gtAdmin', 
  component: SignInComponent
},
{
  path: 'dashboard', 
  component: AdminDashboardComponent, 
  canActivate: [AuthGuard]  
}, 
{
  path: 'adminDestiny', 
  component: DestinyCrudComponent,
  canActivate: [AuthGuard]
},
{
  path: 'adminItinerary', 
  component: ItineraryCrudComponent,
  canActivate: [AuthGuard]
{
  path:'Hotels',
  component: HotelsComponent
},
{
  path:'Destinies',
  component: DestiniesComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

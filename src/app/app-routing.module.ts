import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactUsComponent } from './contact-us/contact-us.component'
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import{SingInComponent}  from './components/sing-in/sing-in.component'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
{
  path:'Contacts',
  component: ContactUsComponent
},
{
  path:'',
  component: HomeComponent
},
{
  path:'AboutUs',
  component: AboutUsComponent
},
{
  path: 'sign-in',
  component: SingInComponent
}, 
{
  path: 'dashboard',
  component: AdminDashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

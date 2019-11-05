import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactUsComponent } from './contact-us/contact-us.component'
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';


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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

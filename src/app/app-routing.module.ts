import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component'
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HotelsComponent } from './hotels/hotels.component'

const routes: Routes = [
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
  path:'Hotels',
  component: HotelsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

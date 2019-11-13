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





const routes: Routes = [
 {
  path: '',
 component: HomeComponent
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
  path: 'sign-in', 
  component: SignInComponent
},
{
  path: 'dashboard', 
  component: AdminDashboardComponent, 
  canActivate: [AuthGuard]  
}, 
{
  path: 'destiny-crud', 
  component: DestinyCrudComponent,
  canActivate: [AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

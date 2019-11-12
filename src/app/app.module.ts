
//Firestore imports
import { AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule,  FirestoreSettingsToken } from '@angular/fire/firestore';
//Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//Bootstrap imports;
import { ToastrModule } from 'ngx-toastr';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
//Components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactFormComponent } from './tools/contact-form/contact-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DestinyCrudComponent } from './admin/destiny-crud/destiny-crud.component';
import { CreateDestinyComponent } from './tools/destiny/create-destiny/create-destiny.component';
import { DestinyListComponent } from './tools/destiny/destiny-list/destiny-list.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
//Authentication Service
import {AuthService} from './services/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeroComponent,
    NavBarComponent,
    ContactFormComponent,
    ContactUsComponent,
    HomeComponent,
    AboutUsComponent,
    DestinyCrudComponent,
    CreateDestinyComponent,
    DestinyListComponent,
    AdminDashboardComponent,
    SingInComponent
  ],
  imports: [
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    BrowserAnimationsModule, 
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    RatingModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [{provide: FirestoreSettingsToken, useValue: {}}, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

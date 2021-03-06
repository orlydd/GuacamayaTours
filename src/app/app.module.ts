
//Firestore imports
import { AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule,  FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//Bootstrap imports;
//import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material.module';
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
import { SignInComponent } from './tools/sign-in/sign-in/sign-in.component';
//Authentication Service
import {AuthService} from './services/auth/auth.service';
import { ItineraryListComponent } from './tools/itinerary/itinerary-list/itinerary-list.component';
import { ItineraryCrudComponent } from './admin/itinerary-crud/itinerary-crud.component';
import { StateListComponent } from './tools/state/state-list/state-list.component';
import { CreateStateComponent } from './tools/state/create-state/create-state.component';
import { StateCrudComponent } from './admin/state-crud/state-crud.component';
import { CityListComponent } from './tools/city/city-list/city-list.component';
import { CreateCityComponent } from './tools/city/create-city/create-city.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MyItineraryComponent } from './my-itinerary/my-itinerary.component';
import { HotelsComponent } from './Hotel Components/hotels/hotels.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelsDisplayComponent } from './Hotel Components/hotels-display/hotels-display.component';
import { HotelsSeeMoreComponent } from './Hotel Components/hotels-see-more/hotels-see-more.component';
import { DestiniesComponent } from '../app/Destiny Components/destinies/destinies.component';
import { DestiniesDisplayComponent } from './Destiny Components/destinies-display/destinies-display.component';
import { ModalComponent } from './modal/modal.component';
import { DestiniesSeeMoreComponent } from './Destiny Components/destinies-see-more/destinies-see-more.component';
import { SideBar2Component } from './components/side-bar2/side-bar2.component';
import { CityCrudComponent } from './admin/city-crud/city-crud.component';
import { InboxComponent } from './admin/inbox/inbox.component';
import { CreateHotelComponent } from './tools/hotel/create-hotel/create-hotel.component';
import { HotelCrudListComponent } from './tools/hotel/hotel-crud-list/hotel-crud-list.component';
import { HotelCrudComponent } from './admin/hotel-crud/hotel-crud.component';
import { CreateItineraryComponent } from './tools/itinerary-view/create-itinerary/create-itinerary.component';
import { PaymeComponent } from './payme/payme.component';

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
    MyItineraryComponent,
    DestinyCrudComponent,
    CreateDestinyComponent,
    DestinyListComponent,
    AdminDashboardComponent,
    SignInComponent,
    ItineraryListComponent,
    ItineraryCrudComponent,
    StateListComponent,
    CreateStateComponent,
    StateCrudComponent,
    CityListComponent,
    CreateCityComponent,
    HotelsComponent,
    HotelsListComponent,
    HotelsDisplayComponent,
    HotelsSeeMoreComponent,
    DestiniesComponent,
    DestiniesDisplayComponent,
    ModalComponent,
    DestiniesSeeMoreComponent,
    SideBar2Component,
    CityCrudComponent,
    InboxComponent,
    CreateHotelComponent,
    HotelCrudListComponent,
    HotelCrudComponent,
    CreateItineraryComponent,
    PaymeComponent,
  ],
  imports: [
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    BrowserAnimationsModule, 
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    RatingModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    //ToastrModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ButtonsModule.forRoot()
  ],
  providers: [BrowserModule,BrowserAnimationsModule,MaterialModule,{provide: FirestoreSettingsToken, useValue: {}}],
  bootstrap: [AppComponent]
})
export class AppModule { }

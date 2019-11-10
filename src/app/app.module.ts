import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactFormComponent } from './tools/contact-form/contact-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DestinyCrudComponent } from './admin/destiny-crud/destiny-crud.component';
import { DestinylistComponent } from './tools/destinylist/destinylist.component';
import { DestinyFormComponent } from './tools/destiny-form/destiny-form.component';
import { DestinyService } from './services/destiny/destiny.service';

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
    DestinylistComponent,
    DestinyFormComponent
  ],
  imports: [
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    RatingModule.forRoot(),
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [DestinyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

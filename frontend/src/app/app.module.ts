import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FooterComponent } from './components/templates/footer/footer.component';
import { HeaderComponent } from './components/templates/header-nav/header.component';
import { HomeComponent } from './view/home/home.component';
import { ProfileComponent } from './view/profile/profile.component';
import { AboutComponent } from './view/about/about.component';
import { SupportUsComponent } from './view/support-us/support-us.component';
import { CardsComponent } from './view/cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    SupportUsComponent,
    CardsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

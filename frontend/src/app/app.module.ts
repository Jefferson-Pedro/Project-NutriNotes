import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/templates/footer/footer.component';
import { HeaderComponent } from './components/templates/header-nav/header.component';
import { HomeComponent } from './view/home/home.component';
import { ProfileComponent } from './view/profile/profile.component';
import { AboutComponent } from './view/about/about.component';
import { SupportUsComponent } from './view/support-us/support-us.component';
import { CardsComponent } from './view/cards/cards.component';
import { ChecklistModule } from './checklist-modules/checklist.module';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { BusinessModule } from './business-modules/business.module';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/templates/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    SupportUsComponent,
    CardsComponent,
    HeaderComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChecklistModule,
    AppMaterialModule,
    BusinessModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [{
    provide: LOCALE_ID,
      useValue: 'pt'
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}

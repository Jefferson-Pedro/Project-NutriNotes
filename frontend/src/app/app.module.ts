import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './features/shared-module/components/nav';
import { FooterComponent } from './features/shared-module/components/footer';
import { HeaderComponent } from './features/shared-module/components/header';
import { HomeComponent } from './core/components/home';
import { PageNotFoundComponent } from './core/components/page-not-found';
import { ProfileComponent } from './core/components/profile';
import { AboutComponent } from './core/components/about';
import { SupportUsComponent } from './core/components/support-us';
import { CardsComponent } from './core/components/cards';
import { LoginComponent } from './core/components/login';
import { AccountComponent } from './core/components/account';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './features/material-module';
import { ChecklistModule } from './features/checklist-module';
import { BusinessModule } from './features/business-module';
import { ReminderModule } from './features/reminder-module';

import { CssDirective } from './core/directives/css';
import { AuthService } from './core/services/auth';
import { SharedModule } from './features/shared-module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    SupportUsComponent,
    CardsComponent,
    LoginComponent,
    AccountComponent,
    CssDirective,
    PageNotFoundComponent,

    
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    AppMaterialModule,
    ChecklistModule,
    BusinessModule,
    ReminderModule,
    SharedModule
  ],
  exports: [],
  providers: [{
    provide: LOCALE_ID,
      useValue: 'pt'
  }, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

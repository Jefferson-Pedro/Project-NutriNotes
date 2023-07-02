import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/templates/footer/footer.component';
import { HeaderComponent } from './components/templates/header/header.component';
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
import { ReminderModule } from './reminder-modules/reminder.module';
import { LoginComponent } from './components/sign-in/login/login.component';
import { AccountComponent } from './components/sign-in/account/account.component';
import { CssDirective } from './directives/css/css.directive';
import { AuthService } from './components/sign-in/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    SupportUsComponent,
    CardsComponent,
    LoginComponent,
    AccountComponent,
    CssDirective
    
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    ChecklistModule,
    BusinessModule,
    ReminderModule,
  ],
  exports: [HttpClientModule],
  providers: [{
    provide: LOCALE_ID,
      useValue: 'pt'
  }, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

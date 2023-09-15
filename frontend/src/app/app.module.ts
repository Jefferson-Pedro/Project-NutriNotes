import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessModule } from './features/business-module';
import { ChecklistModule } from './features/checklist-module';
import { CheklistRoutingModule } from './features/checklist-module/checklist-routing.module';
import { LoginModule } from './features/login-module/login.module';
import { ReminderModule } from './features/reminder-module';
import { SharedModule } from './features/shared-module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ChecklistModule,
    CheklistRoutingModule,
    BusinessModule,
    ReminderModule,
    SharedModule,
    LoginModule,
    CoreModule,
  
  ],
  exports: [],
  providers: [{
    provide: LOCALE_ID,
      useValue: 'pt'
  },  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

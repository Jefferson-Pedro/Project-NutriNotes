import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsReminderComponent } from './forms-reminder/forms-reminder.component';
import { ReminderNotificationsComponent } from './reminder-notifications/reminder-notifications.component';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ReminderRoutingModule } from './reminder-routing.module';



@NgModule({
  declarations: [
    FormsReminderComponent,
    ReminderNotificationsComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReminderRoutingModule,
    AppRoutingModule,
  ]
})
export class ReminderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsReminderComponent } from './forms-reminder/forms-reminder.component';
import { ReminderNotificationsComponent } from './reminder-notifications/reminder-notifications.component';



@NgModule({
  declarations: [
    FormsReminderComponent,
    ReminderNotificationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReminderModule { }

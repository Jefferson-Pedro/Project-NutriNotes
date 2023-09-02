import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsReminderComponent } from './components/forms-reminder';
import { ReminderNotificationsComponent } from './dialog/reminder-notification';


import { ReminderRoutingModule } from './reminder-routing.module';

import { SharedModule } from '../shared-module';


@NgModule({
  declarations: [
    FormsReminderComponent,
    ReminderNotificationsComponent
  ],
  imports: [
    CommonModule,
    ReminderRoutingModule,
    SharedModule //Lib do angular compartilhado
  ]
})
export class ReminderModule { }

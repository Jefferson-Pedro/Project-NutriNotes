import { ReminderNotificationsComponent } from './reminder-notifications/reminder-notifications.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'reminder/notifications', component: ReminderNotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReminderRoutingModule { }

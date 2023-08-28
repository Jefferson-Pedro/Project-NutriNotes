import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReminderNotificationsComponent } from './dialog/reminder-notification';

const routes: Routes = [
  {path:'notifications', component: ReminderNotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReminderRoutingModule { }

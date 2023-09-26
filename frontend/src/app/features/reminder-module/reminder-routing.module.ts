import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsReminderComponent } from './components/forms-reminder';
import { ListReminderComponent } from './components/list-reminder/list-reminder.component';

const routes: Routes = [

  {path:'list-notifications', component: ListReminderComponent},

  {path:'form-notifications', component: FormsReminderComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReminderRoutingModule { }

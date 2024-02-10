import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsReminderComponent } from './components/forms-reminder';
import { ListReminderComponent } from './components/list-reminder/list-reminder.component';
import { CalendarReminderComponent } from './components/calendar-reminder/calendar-reminder.component';

const routes: Routes = [

  {path:'lista-de-notificacoes', component: ListReminderComponent},

  {path:'form-notificacoes', component: FormsReminderComponent},

  {path:'calendario-de-eventos', component: CalendarReminderComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReminderRoutingModule { }

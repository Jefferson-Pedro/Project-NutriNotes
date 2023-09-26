import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared-module';
import { FormsReminderComponent } from './components/forms-reminder';
import { ListReminderComponent } from './components/list-reminder/list-reminder.component';
import { ReminderRoutingModule } from './reminder-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    FormsReminderComponent,
    ListReminderComponent
  ],
  imports: [
    CommonModule,
    ReminderRoutingModule,
    SharedModule ,//Lib do angular compartilhado
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class ReminderModule { }

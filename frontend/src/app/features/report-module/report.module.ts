import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListReportComponent } from './list-report/list-report.component';
import { SharedModule } from '../shared-module';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    DashboardComponent,
    ListReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule,
    MatTableModule,
    MatTabsModule
  ]
})
export class ReportModule { }

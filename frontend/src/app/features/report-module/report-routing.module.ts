import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { ListReportComponent } from './list-report/list-report.component';

const routes: Routes = [

  {path: 'dashboard', component: DashboardComponent},

  {path: 'list-report', component: ListReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }

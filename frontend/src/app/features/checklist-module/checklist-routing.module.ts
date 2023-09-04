import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationDailyComponent } from './components/checklist-daily';
import { DocumentationMonthlyComponent } from './components/checklist-monthly';
import { ListChecklistMonthlyComponent } from './components/list-checklist-monthly';



const routes: Routes = [
  
  {path: 'documentation-daily', component: DocumentationDailyComponent},

  {path: 'documentation-monthly', component: DocumentationMonthlyComponent},

  {path:'list-checklist', component: ListChecklistMonthlyComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheklistRoutingModule {}

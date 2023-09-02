import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationDailyComponent } from './components/checklist-daily';
import { DocumentationMonthlyComponent } from './components/checklist-monthly';



const routes: Routes = [
  
  {path: 'documentation-daily', component: DocumentationDailyComponent},
  {path: 'documentation-monthly', component: DocumentationMonthlyComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheklistRoutingModule {}

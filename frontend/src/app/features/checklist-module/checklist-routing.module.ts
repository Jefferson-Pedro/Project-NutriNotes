import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { DocumentationDailyComponent } from './components/checklist-daily/documentation-daily';
import { ListChecklistMonthlyComponent } from './components/list-checklist-monthly';
import { provideHttpClient } from '@angular/common/http';
import { DocumentationContainerComponent } from './components/checklist-monthly/documentation-monthly/documentation-container';
import { WorkplaceSafetyContainerComponent } from './components/checklist-monthly/workplace-safety-monthly/workplace-safety-container';


const routes: Routes = [

  {path:'documentation-daily', component: DocumentationDailyComponent},

  {path:'list-checklist', component: ListChecklistMonthlyComponent},

  { path:'documentacao-mensal', component: DocumentationContainerComponent},

  { path:'seguranca-do-trabalho-mensal', component: WorkplaceSafetyContainerComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding())
  ],
})
export class CheklistRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { DocumentationDailyComponent } from './components/checklist-daily/documentation-daily';
import { DocumentationMonthlyComponent } from './components/checklist-monthly/documentation-monthly';
import { ListChecklistMonthlyComponent } from './components/list-checklist-monthly';
import { provideHttpClient } from '@angular/common/http';


const routes: Routes = [

  {path:'documentation-daily', component: DocumentationDailyComponent},

  {path:'list-checklist', component: ListChecklistMonthlyComponent},

  { path:'documentacao-mensal', component: DocumentationMonthlyComponent },
  
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

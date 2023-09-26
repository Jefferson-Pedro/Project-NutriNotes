import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home';
import { PageNotFoundComponent } from './core/components/page-not-found';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirecionamento para '/home' quando o caminho estiver vazio

  {path: 'home', component: HomeComponent},

  {path: 'core', loadChildren: () =>
    import('./core/core.module').then(
      (module) => module.CoreModule)},

  {path: 'business', loadChildren: () =>
    import('./features/business-module/business.module').then(
      (module) => module.BusinessModule)},
  
  {path: 'reminder', loadChildren: () =>
    import('./features/reminder-module/reminder.module').then(
      (module) => module.ReminderModule)},

  {path: 'checklist', loadChildren: () =>
    import('./features/checklist-module/checklist.module').then(
      (module) => module.ChecklistModule)},
  
  {path: 'report', loadChildren: () =>
      import('./features/report-module/report.module').then(
        (module) => module.ReportModule)},
  
  {path: 'login', loadChildren: () =>
    import('./features/login-module/login.module').then(
      (module) => module.LoginModule)},
  
  {path: '**',component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule],
})
export class AppRoutingModule {}

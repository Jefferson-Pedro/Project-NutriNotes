import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/components/about';
import { AccountComponent } from './core/components/account';
import { HomeComponent } from './core/components/home';
import { LoginComponent } from './core/components/login';
import { PageNotFoundComponent } from './core/components/page-not-found';
import { ProfileComponent } from './core/components/profile';
import { SupportUsComponent } from './core/components/support-us';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirecionamento para '/home' quando o caminho estiver vazio

  {path: 'home', component: HomeComponent},

  {path: 'profile', component: ProfileComponent},
  
  {path: 'about',component: AboutComponent},

  {path: 'supportUs',component: SupportUsComponent},
  
  {path: 'account',component: AccountComponent},

  {path: 'login',component: LoginComponent},

  {path: 'business', loadChildren: () =>
  import('./features/business-module/business.module').then(
    (module) => module.BusinessModule)},
  
  {path: 'reminder', loadChildren: () =>
  import('./features/reminder-module/reminder.module').then(
    (module) => module.ReminderModule)},

  {path: '**',component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

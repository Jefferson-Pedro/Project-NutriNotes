import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import {ProfileComponent} from './view/profile/profile.component';
import { AboutComponent } from './view/about/about.component';
import { SupportUsComponent } from './view/support-us/support-us.component'; 

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirecionamento para '/home' quando o caminho estiver vazio
  
  {path: 'home', component: HomeComponent},

  {path: 'profile', component: ProfileComponent},
  
  {path: 'about',component: AboutComponent},

  {path: 'supportUs',component: SupportUsComponent
  } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile';
import { AboutComponent } from './components/about';
import { SupportUsComponent } from './components/support-us';

const routes: Routes = [

  {path: 'profile', component: ProfileComponent},
  
  {path: 'about',component: AboutComponent},

  {path: 'supportUs',component: SupportUsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

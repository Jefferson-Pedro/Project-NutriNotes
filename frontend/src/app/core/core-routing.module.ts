import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about';
import { SupportUsComponent } from './components/support-us';
import { UserComponent } from './components/user';

const routes: Routes = [

  {path: 'perfil', component: UserComponent},
  
  {path: 'sobre',component: AboutComponent},

  {path: 'apoie-nos',component: SupportUsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

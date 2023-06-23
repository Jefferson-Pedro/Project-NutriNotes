import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBusinessComponent } from './create-business/create-business.component';
import { ReadBusinessComponent } from './read-business/read-business.component';



const routes: Routes = [

 /* {path: 'business',
  loadChildren: () => import('./business.module').then(m => m.BusinessModule)},*/

  {path: 'business', component: CreateBusinessComponent},
 
  {path: 'business/read', component: ReadBusinessComponent},
  
  {path: 'business/edit/:id',component: CreateBusinessComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}

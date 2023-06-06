import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBusinessComponent } from './create-business/create-business.component';
import { ReadBusinessComponent } from './read-business/read-business.component';
import { BusinessResolver } from './guards/business.resolver';


const routes: Routes = [

 /* {path: 'business',
  loadChildren: () => import('./business.module').then(m => m.BusinessModule)},*/

  {path: 'business', component: CreateBusinessComponent,}, //resolve: {business: BusinessResolver}},
 
  {path: 'business/read', component: ReadBusinessComponent},
  
  {path: 'business/edit/:id',component: CreateBusinessComponent,} //resolve: {business: BusinessResolver}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}

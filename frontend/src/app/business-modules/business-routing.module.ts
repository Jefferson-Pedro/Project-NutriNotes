import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBusinessComponent } from './create-business/create-business.component';
import { ReadBusinessComponent } from './read-business/read-business.component';



const routes: Routes = [

  {path: 'business/new', component: CreateBusinessComponent},

  {path: 'business/edit/:id',component: CreateBusinessComponent} ,
 
  {path: 'business/read', component: ReadBusinessComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}

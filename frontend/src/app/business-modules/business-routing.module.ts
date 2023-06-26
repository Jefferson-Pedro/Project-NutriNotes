import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBusinessComponent } from './form-business/form-business.component';
import { ListBusinessComponent } from './list-business/list-business.component';



const routes: Routes = [

  {path: 'business/new', component: FormBusinessComponent},

  {path: 'business/edit/:id',component: FormBusinessComponent} ,
 
  {path: 'business/list', component: ListBusinessComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBusinessComponent } from './components/form-business';
import { ListBusinessComponent } from './components/list-business';
import { FormDepartmentComponent } from './components/form-department';


const routes: Routes = [

  {path: 'new', component: FormBusinessComponent},

  {path: 'edit/:id',component: FormBusinessComponent} ,

  {path: 'department/:id',component:  FormDepartmentComponent} ,
 
  {path: 'list', component: ListBusinessComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}

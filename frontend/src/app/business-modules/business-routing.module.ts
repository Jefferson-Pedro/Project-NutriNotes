import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBusinessComponent } from './business/create-business/create-business.component';


const routes: Routes = [
  {
    path: 'empresa',
    component: CreateBusinessComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}

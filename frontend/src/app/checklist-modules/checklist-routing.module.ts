import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './checklist-daily/create-checkList/documentation/documentation.component';

const routes: Routes = [
  {
    path: 'documentation',
    component: DocumentationComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CheklistRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './components/checklist-daily-documentation';


const routes: Routes = [
  {
    path: 'documentation',
    component: DocumentationComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheklistRoutingModule {}

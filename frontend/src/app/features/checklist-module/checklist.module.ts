import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../material-module';
import { CheklistRoutingModule } from './checklist-routing.module';
import { DocumentationComponent } from './components/checklist-daily-documentation';
import { ChecklistMensalComponent } from './components/checklist-mensal/checklist-mensal.component';
import { LegislationComponent } from './dialog/legislation';
import { OptionClDailyComponent } from './dialog/option-type-cl/option-cl-daily';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ /*Declaro os modulos criados*/
    ChecklistMensalComponent,
    LegislationComponent,
    DocumentationComponent,
    OptionClDailyComponent,  

  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    CheklistRoutingModule,
  ], 
  exports: [
    LegislationComponent
  ]
})
export class ChecklistModule { }

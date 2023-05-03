import { CheklistRoutingModule } from './checklist-routing.module';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


import { ChecklistMensalComponent } from './checklist-mensal/checklist-mensal.component';
import { LegislationComponent } from './dialog/legislation/legislation.component';
import { DocumentationComponent } from './checklist-diario/documentation/documentation.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { OptionClDailyComponent } from './dialog/option-type-cl/option-cl-daily/option-cl-daily.component';



@NgModule({
  declarations: [ /*Declaro os modulos criados*/
    ChecklistMensalComponent,
    LegislationComponent,
    DocumentationComponent,
    OptionClDailyComponent,

  ],
  imports: [
    CommonModule,
    MatDialogModule,
    AppMaterialModule,
    CheklistRoutingModule

  ], 
  exports: [
    LegislationComponent
  ]
})
export class ChecklistModule { }

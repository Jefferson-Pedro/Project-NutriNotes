import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChecklistMensalComponent } from './checklist-mensal/checklist-mensal.component';
import { LegislationComponent } from './dialog/legislation/legislation.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { OptionClDailyComponent } from './dialog/option-type-cl/option-cl-daily/option-cl-daily.component';
import { AppRoutingModule } from '../app-routing.module';
import { CheklistRoutingModule } from './checklist-routing.module';
import { DocumentationComponent } from './checklist-daily/create-checkList/documentation/documentation.component';



@NgModule({
  declarations: [ /*Declaro os modulos criados*/
    ChecklistMensalComponent,
    LegislationComponent,
    DocumentationComponent,
    OptionClDailyComponent,  

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    CheklistRoutingModule,
    AppRoutingModule,
   
  ], 
  exports: [
    LegislationComponent
  ]
})
export class ChecklistModule { }

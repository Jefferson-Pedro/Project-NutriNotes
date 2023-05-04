import { ChecklistModule } from './../checklist-modules/checklist.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBusinessComponent } from './business/create-business/create-business.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { BusinessRoutingModule } from './business-routing.module';



@NgModule({
  declarations: [
    CreateBusinessComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ChecklistModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }

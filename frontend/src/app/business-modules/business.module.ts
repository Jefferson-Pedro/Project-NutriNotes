import { ChecklistModule } from './../checklist-modules/checklist.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBusinessComponent } from './create-business/create-business.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { BusinessRoutingModule } from './business-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReadBusinessComponent } from './read-business/read-business.component';



@NgModule({
  declarations: [
    CreateBusinessComponent,
    ReadBusinessComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ChecklistModule,
    BusinessRoutingModule,
    MatFormFieldModule
  ]
})
export class BusinessModule { }

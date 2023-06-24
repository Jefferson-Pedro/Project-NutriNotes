import { ChecklistModule } from './../checklist-modules/checklist.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { BusinessRoutingModule } from './business-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListBusinessComponent} from './list-business/list-business.component';
import { ErrorDialogComponent } from './dialog/error-dialog/error-dialog.component';
import { FormBusinessComponent } from './form-business/form-business.component';



@NgModule({
  declarations: [
    FormBusinessComponent,
    ListBusinessComponent,
    ErrorDialogComponent
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


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { AppMaterialModule } from '../material-module';
import { ChecklistModule } from '../checklist-module';

import { ErrorDialogComponent } from './dialog/error-dialog/error-dialog.component';
import { FormBusinessComponent } from './components/form-business';
import { ListBusinessComponent } from './components/list-business';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module';

@NgModule({
  declarations: [
    FormBusinessComponent,
    ListBusinessComponent,
    ErrorDialogComponent
  ],
  imports: [
  CommonModule,
    RouterModule,
    AppMaterialModule,
    BusinessRoutingModule,
    SharedModule

  ]
})
export class BusinessModule { }

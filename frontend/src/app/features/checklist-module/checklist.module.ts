import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { getPtPaginatorIntl } from 'src/app/core/intl/paginator-intl';
import { SharedModule } from '../shared-module';
import { CheklistRoutingModule } from './checklist-routing.module';
import { DocumentationDailyComponent } from './components/checklist-daily/documentation-daily';

import { ListChecklistMonthlyComponent } from './components/list-checklist-monthly';
import { OptionDailyDialogComponent } from './option-daily-dialog';
import { OptionMonthlyDialogComponent } from './option-monthly-dialog/option-monthly-dialog.component';
import { DocumentationContainerComponent } from './components/checklist-monthly/documentation-monthly/documentation-container';
import { DocumentationQuestionsComponent } from './components/checklist-monthly/documentation-monthly/documentarion-questions';
import { WorkplaceSafetyContainerComponent } from './components/checklist-monthly/workplace-safety-monthly/workplace-safety-container';
import { WorkplaceSafetyFormComponent } from './components/checklist-monthly/workplace-safety-monthly/workplace-safety-form';
import { WorkplaceSafetyQuestionsComponent } from './components/checklist-monthly/workplace-safety-monthly/workplace-safety-questions';



@NgModule({
  declarations: [ /*Declaro os modulos criados*/
    DocumentationDailyComponent,
    OptionMonthlyDialogComponent,
    OptionDailyDialogComponent,
    ListChecklistMonthlyComponent,
    DocumentationContainerComponent,
    DocumentationQuestionsComponent,
    WorkplaceSafetyContainerComponent,
    WorkplaceSafetyFormComponent,
    WorkplaceSafetyQuestionsComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CheklistRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    MatAutocompleteModule,
  ], 
  exports: [],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPtPaginatorIntl() },
    // provideHttpClient(),
    // provideRouter(routes, withComponentInputBinding())
  ],
})
export class ChecklistModule { }

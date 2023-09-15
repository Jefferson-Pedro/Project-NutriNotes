import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module';
import { CheklistRoutingModule } from './checklist-routing.module';
import { DocumentationDailyComponent } from './components/checklist-daily';
import { DocumentationMonthlyComponent } from './components/checklist-monthly';
import { ListChecklistMonthlyComponent } from './components/list-checklist-monthly';
import { OptionDailyDialogComponent } from './option-daily-dialog';
import { OptionMonthlyDialogComponent } from './option-monthly-dialog/option-monthly-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [ /*Declaro os modulos criados*/
    DocumentationDailyComponent,
    DocumentationMonthlyComponent,
    OptionMonthlyDialogComponent,
    OptionDailyDialogComponent,
    ListChecklistMonthlyComponent,

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
  ], 
  exports: []
})
export class ChecklistModule { }

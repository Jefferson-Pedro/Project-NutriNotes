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
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../features/shared-module';
import { AboutComponent } from './components/about';
import { CardsComponent } from './components/cards';
import { HomeComponent } from './components/home';
import { PageNotFoundComponent } from './components/page-not-found';
import { ProfileComponent } from './components/profile';
import { SupportUsComponent } from './components/support-us';
import { CoreRoutingModule } from './core-routing.module';
import { LegislationComponent } from './dialog/legislation';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    SupportUsComponent,
    CardsComponent,
    PageNotFoundComponent,
    LegislationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CoreRoutingModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthService } from './services/auth';
import { LoginComponent } from './components/login';
import { AccountComponent } from './components/account';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared-module';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    LoginComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatStepperModule,
    LoginRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatRadioModule
  ],
  exports: [AccountComponent],
  providers: [AuthService],
})
export class LoginModule { }

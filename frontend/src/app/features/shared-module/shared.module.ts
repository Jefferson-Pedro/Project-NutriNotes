import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer';
import { HeaderComponent } from './components/header';
import { LoaderComponent } from './components/loader';
import { NavComponent } from './components/nav';
import { CssDirective } from './directives/css';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    LoaderComponent, 
    NavComponent,
    FooterComponent,
    HeaderComponent,
    CssDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule,
    NgxMaskDirective, 
    NgxMaskPipe

  ],
  exports: [
      CssDirective,
      LoaderComponent,
      NavComponent,
      FooterComponent,
      HeaderComponent,
      NgxMaskDirective, 
      NgxMaskPipe
    ],
    providers: [provideEnvironmentNgxMask()]
})
export class SharedModule { }

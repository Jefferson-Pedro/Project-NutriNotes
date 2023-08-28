import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader';
import { AppMaterialModule } from '../material-module';

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [LoaderComponent],
})
export class SharedModule { }

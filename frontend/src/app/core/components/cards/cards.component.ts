import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LegislationComponent } from 'src/app/core/components/legislation';
import { OptionDailyDialogComponent } from 'src/app/features/checklist-module/option-daily-dialog';
import { OptionMonthlyDialogComponent } from 'src/app/features/checklist-module/option-monthly-dialog/option-monthly-dialog.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor(private dialog: MatDialog, private router: Router, route: ActivatedRoute ) {}

  public openDialogCreateDaily(): void{
    const dialogRef = this.dialog.open(OptionDailyDialogComponent , {
      autoFocus: false
    });
  }

  public openDialogCreateMonthly(): void{
    const dialogRef = this.dialog.open(OptionMonthlyDialogComponent, {
      autoFocus: false
    });
  }
  
  public onListCheckListMonthly(): void{
    this.router.navigate(['checklist/list-checklist']);
  }

  public openDialogLegislation():void{
    const dialogRef = this.dialog.open(LegislationComponent);
  }

  public onCreateReport(){
    //this.router.navigate(['report/new']);
  }

  public onViewReport(){
    this.router.navigate(['report/dashboard']);
  }

  onCreateBusiness(){
    this.router.navigate(['business/new']);
  }

  onReadBusiness(){
    this.router.navigate(['business/list']);
  }

  onCalendarReminder(){
    this.router.navigate(['reminder/calendario-de-eventos']);
  }

  onListReminder(){
    this.router.navigate(['reminder/lista-de-notificacoes']);
  }

}

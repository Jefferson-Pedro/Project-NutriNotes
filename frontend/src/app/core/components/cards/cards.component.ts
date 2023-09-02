import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LegislationComponent } from 'src/app/core/dialog/legislation';
import { OptionDailyDialogComponent } from 'src/app/features/checklist-module/option-daily-dialog';
import { OptionMonthlyDialogComponent } from 'src/app/features/checklist-module/option-monthly-dialog/option-monthly-dialog.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor(private dialog: MatDialog, private router: Router, route: ActivatedRoute ) {}

  openDialogCreateDaily(){
    const dialogRef = this.dialog.open(OptionDailyDialogComponent);
  }

  openDialogCreateMonthly(){
    const dialogRef = this.dialog.open(OptionMonthlyDialogComponent);
  }

  openDialogLegislation() {
    const dialogRef = this.dialog.open(LegislationComponent);
  }

  onClickCreateBusiness(){
    console.log('Clicou!')
    this.router.navigate(['business/new']);
  }

  onClickReadBusiness(){
    this.router.navigate(['business/list']);
  }
  onClickCreateReminder(){
    this.router.navigate(['reminder/notifications']);
  }

}

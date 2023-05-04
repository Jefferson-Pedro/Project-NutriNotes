import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

import { LegislationComponent } from 'src/app/checklist-modules/dialog/legislation/legislation.component';
import { OptionClDailyComponent } from 'src/app/checklist-modules/dialog/option-type-cl/option-cl-daily/option-cl-daily.component';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor(private dialog: MatDialog, private router: Router ) {}

  openDialogCreate(){
    const dialogRef = this.dialog.open(OptionClDailyComponent);
  }

  openDialogLegislation() {
    const dialogRef = this.dialog.open(LegislationComponent);
  }

  onClickBusiness(){
    console.log('Clicou!')
    this.router.navigate(['empresa']);
  }

}

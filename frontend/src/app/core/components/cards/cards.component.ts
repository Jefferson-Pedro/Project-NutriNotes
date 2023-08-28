import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LegislationComponent } from 'src/app/features/checklist-module/dialog/legislation';
import { OptionClDailyComponent } from 'src/app/features/checklist-module/dialog/option-type-cl/option-cl-daily';




@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor(private dialog: MatDialog, private router: Router, route: ActivatedRoute ) {}

  openDialogCreate(){
    const dialogRef = this.dialog.open(OptionClDailyComponent);
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

import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LegislationComponent } from 'src/app/dialog/legislation/legislation.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  

  constructor(private dialog: MatDialog ) {}

  openDialog() {
    const dialogRef = this.dialog.open(LegislationComponent);
  }

}

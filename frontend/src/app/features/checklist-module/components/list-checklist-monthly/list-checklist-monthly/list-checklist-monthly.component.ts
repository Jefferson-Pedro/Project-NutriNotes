import { Component } from '@angular/core';
import { Checklist } from './../../../../../core/models/checklist';

@Component({
  selector: 'app-list-checklist-monthly',
  templateUrl: './list-checklist-monthly.component.html',
  styleUrls: ['./list-checklist-monthly.component.css']
})
export class ListChecklistMonthlyComponent {

  checklist!: Checklist[];

  constructor(){}
}

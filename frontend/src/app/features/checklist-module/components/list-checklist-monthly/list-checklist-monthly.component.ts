import { Component, OnInit } from '@angular/core';
import { Checklist } from '../../../../core/models/checklist';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { ChecklistService } from '../../service/checklist.service';

@Component({
  selector: 'app-list-checklist-monthly',
  templateUrl: './list-checklist-monthly.component.html',
  styleUrls: ['./list-checklist-monthly.component.css']
})
export class ListChecklistMonthlyComponent implements OnInit {

  checklist$: Observable<Checklist[]>;
  pageEvent: PageEvent | undefined;

  length = 50;
  pageSize = 0;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  displayedColumns = ['titulo','idBusiness' , 'idSetores', 'dataAuditoria'];

  constructor(private service: ChecklistService){
    this.checklist$ = this.service.list();
  }
  ngOnInit(): void {
    this.checklist$.subscribe({
      next: (value: Checklist[]) => {
        console.log('Deu certo!');
        console.log(value);
      },
      error: (err) => {},
    });
  }

  handlePageEvent(e: PageEvent){
   
    console.log('evento', e);
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

  }

  public onCreateBusiness(){}

  public onEdit(){}

  public onDelete(){}
}

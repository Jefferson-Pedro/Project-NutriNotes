import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Checklist } from 'src/app/core/models/Checklist';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { ChecklistService } from '../../service/checklist.service';
import { PaginatorConfig2 } from './paginatorconfig2';
import { AlertService } from 'src/app/features/shared-module/services/alert/alert.service';

@Component({
  selector: 'app-list-checklist-monthly',
  templateUrl: './list-checklist-monthly.component.html',
  styleUrls: ['./list-checklist-monthly.component.css'],
})
export class ListChecklistMonthlyComponent {
  checklist!: Checklist[];

  pageEvent: PageEvent | undefined;
  paginator: PaginatorConfig2 | undefined;

  length = 50;
  pageSize = 0;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  displayedColumns = [
    'titulo',
    'idBusiness',
    'idSetores',
    'dataAuditoria',
    'actions',
  ];

  constructor(
    private service: ChecklistService,
    private notification: NotificationService,
    private alert: AlertService,
    private router: Router
  ) {
    this.onpageList();
  }

  ngOnInit(): void {
    // this.checklist$.subscribe({
    //   next: (value: Checklist[]) => {
    //     console.log('Deu certo!');
    //     console.log(value);
    //   },
    //   error: (err) => {},
    // });
  }

  public handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.onpageList();
  }

  public onpageList() {
    this.service.getPageList(this.pageIndex, this.pageSize).subscribe({
      next: (res: any) => {
        console.log('CheckList:', res);
        this.checklist = res.content;
        this.paginator = res;
        this.length = this.paginator!.totalElements;
      },
      error: (err: any) => {
        this.alert.onError(
          'Erro ao carregar a lista de empresas, verifique a conexão com o banco de dados!'
        );
        console.log(err);
        return [];
      },
    });
  }

  public onCreateChecklist(): void {}

  public onEdit(): void {}

  public onDelete() {}

  public onCreateReport() {}
}

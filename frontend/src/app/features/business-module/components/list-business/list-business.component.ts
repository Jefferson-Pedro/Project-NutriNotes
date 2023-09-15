import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Business } from 'src/app/core/models/Business';
import { AlertService } from 'src/app/features/shared-module/services/alert/alert.service';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { BusinessService } from '../../services';
import { PaginatorConfig } from './paginatorConfig';

@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.css'],
})
export class ListBusinessComponent implements OnInit {
  business!: Observable<Business[]>;
  //business!: Business[];

  pageEvent: PageEvent | undefined;
  paginator: PaginatorConfig | undefined;

  length = 50;
  pageSize = 0;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  displayedColumns = ['idBusiness', 'nome', 'cnpj', 'actions'];

  constructor(
    private service: BusinessService,
    private notification: NotificationService,
    public dialog: MatDialog,
    private router: Router,
    protected alert: AlertService
  ) {
    this.onpageList();
  }

  ngOnInit(): void {}

  handlePageEvent(e: PageEvent) {
    console.log('evento', e);
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.onpageList();
  }

  public onpageList() {
    this.service.getPageList(this.pageIndex, this.pageSize).subscribe({
      next: (res) => {
        console.log(res);
        this.business = res.content;
        this.paginator = res;
        this.length = this.paginator!.totalElements;
      },
      error: (err) => {
        this.alert.onError(
          'Erro ao carregar a lista de empresas, verifique a conexão com o banco de dados!'
        );
        console.log(err);
        return of([]);
      },
    });
  }

  public onCreateBusiness() {
    this.router.navigate(['business/new']);
  }

  public onEdit(business: Business) {
    this.router.navigate(['business/edit', business.idBusiness]);
  }

  public onDelete(business: Number) {
    this.service.delete(business).subscribe({
      next: () => {
        this.notification.showMessageSucess('Sucesso! Empresa excluída');
        window.location.reload();
      },
      error: () => {
        this.notification.showMessageFail(
          'Ocorreu um erro ao excluir a empresa'
        );
      },
    });
  }
}

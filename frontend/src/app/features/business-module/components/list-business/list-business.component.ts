import {MatPaginator, PageEvent } from '@angular/material/paginator';
import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { PaginatorConfig } from './paginatorConfig';
import { Business } from 'src/app/core/models/business';
import { BusinessService } from '../../services';
import { ErrorDialogComponent } from 'src/app/features/shared-module/components/error-dialog';
import { NotificationService } from 'src/app/features/shared-module/services/notification';



@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.css'],
})
export class ListBusinessComponent implements OnInit {

  business$!: Observable<Business[]>;
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
  ) {
  
    // this.business$ = this.service.list().pipe(
    //   catchError((erro) => {
    //     this.onError('Erro ao carregar a lista de empresas');
    //     console.log(erro);
    //     return of([]);
    //   })
    // );
    this.onpageList();    
  }

  ngOnInit(): void {}

  handlePageEvent(e: PageEvent){
   
    console.log('evento', e);
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.onpageList();
  }

  public onpageList(){
    this.service.getPageList(this.pageIndex, this.pageSize).subscribe({
      next: (res) => {
        console.log(res);
        this.business$ = res.content;
        this.paginator = res;
        this.length = this.paginator!.totalElements;
      },
      error: (err) => {
        this.onError('Erro ao carregar a lista de empresas');
        console.log(err);
        return of([]);
      }, 
    });
  }

  public onError(errorMsg: string) { 
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
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
        this.notification.showMessageFail('Ocorreu um erro ao excluir a empresa');
      },
    });
  }
}
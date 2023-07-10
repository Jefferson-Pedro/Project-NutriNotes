import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, PageEvent } from '@angular/material/paginator';
import { Component, OnInit, ViewChild} from '@angular/core';
import { BusinessService } from '../business.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';



import { Business } from 'src/app/models/business';
import { ErrorDialogComponent } from '../dialog/error-dialog/error-dialog.component';
import { PaginatorConfig } from './paginatorConfig';



@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.css'],
})
export class ListBusinessComponent implements OnInit {

 // business$: Observable<Business[]>;
  business!: Business[];

  pageEvent: PageEvent | undefined;
  paginator: PaginatorConfig | undefined;

  length = 50;
  pageSize = 0;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
 
  displayedColumns = ['idBusiness', 'nome', 'cnpj', 'actions'];

  constructor(
    private service: BusinessService,
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
    console.log('onPage List:',this.pageIndex, this.pageSize); 
    this.service.getPageList(this.pageIndex, this.pageSize).subscribe({
      next: (res) => {
        console.log(res);
        this.business = res.content;
        this.paginator = res;
        this.length = this.paginator!.totalElements;
      },
      error: (err) => {
        console.log(err);
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
        this.service.showMessageSucess('Sucesso! Empresa excluída');
        window.location.reload();
      },
      error: () => {
        this.service.showMessageFail('Ocorreu um erro ao excluir a empresa');
      },
    });
  }
}
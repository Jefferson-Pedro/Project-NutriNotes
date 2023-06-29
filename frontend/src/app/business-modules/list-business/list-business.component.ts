import { MatTableDataSource } from '@angular/material/table';
import {PageEvent } from '@angular/material/paginator';
import { Component, OnInit} from '@angular/core';
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
  business!: Observable<Business[]> ;
  paginatorConfig: PaginatorConfig = {
    pageIndex: 0,
    pageSize: 5,
    totalPages: 0
  };
  pageSizeOptions = [5, 10, 25];
  showPageSizeOptions = true;
  pageEvent: PageEvent | undefined;
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


  public onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  handlePageEvent(pageEvent: PageEvent){
    console.log('evento', pageEvent);
    this.paginatorConfig.pageIndex = pageEvent.pageIndex;
    this.paginatorConfig.pageSize = pageEvent.pageSize;
    this.paginatorConfig.totalPages = pageEvent.length;

    console.log('evento:', this.paginatorConfig.pageIndex, this.paginatorConfig.pageSize, this.paginatorConfig.totalPages);

    this.service.getPageList(this.paginatorConfig.pageIndex, this.paginatorConfig.pageSize).subscribe({
      next:(res) => {
        console.log(res);
        console.log('metodo getPage',this.paginatorConfig.pageIndex, this.paginatorConfig.pageSize);
        this.business = res.content;
      },
      error:(err)=> {
          console.log(err);
      },
    });
    
  }

  public onpageList(){

    // this.service.list().subscribe({
    //   next:(res: any) => {
    //     this.business = res;
    //   },
    // });
    this.service.getPageList(this.paginatorConfig.pageIndex, this.paginatorConfig.pageSize).subscribe({
      next:(res) => {
        console.log(res);
        console.log('metodo getPage2',this.paginatorConfig.pageIndex, this.paginatorConfig.pageSize, this.paginatorConfig.totalPages);
        this.business = res.content;
      },
      error:(err)=> {
          console.log(err);
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
        this.service.showMessageSucess('Sucesso! Empresa excluída');
        window.location.reload();
      },
      error: () => {
        this.service.showMessageFail('Ocorreu um erro ao excluir a empresa');
      },
    });
  }
}
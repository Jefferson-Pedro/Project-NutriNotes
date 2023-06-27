import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';


import { Business } from 'src/app/models/business';
import { ErrorDialogComponent } from '../dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.css'],
})
export class ListBusinessComponent implements OnInit {

 // business$: Observable<Business[]>;
  business: Array<any> = [] ;
  pageEvent: PageEvent | undefined;
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showPageSizeOptions = true;
  

  displayedColumns = ['idBusiness', 'nome', 'cnpj', 'actions'];

  constructor(
    private service: BusinessService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.business$ = this.service.list().pipe(
    //   catchError((erro) => {
    //     this.onError('Erro ao carregar a lista de empresas');
    //     console.log(erro);
    //     return of([]);
    //   })
    // );
  }

  ngOnInit(): void {

   this.onpageList(0, 5);
  }  
  
  public onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  public onpageList(page: number, size: number){

    this.service.pageList(page, size).subscribe(
      res => { 
        console.log(res);
        this.business = res.content; }
    );


  }

  public onCreateBusiness() {
    this.router.navigate(['business']);
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
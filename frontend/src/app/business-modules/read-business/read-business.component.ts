import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/models/business';
import { BusinessService } from '../business.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../dialog/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-read-business',
  templateUrl: './read-business.component.html',
  styleUrls: ['./read-business.component.css'],
})
export class ReadBusinessComponent implements OnInit {
  business$: Observable<Business[]>;
  displayedColumns = ['idBusiness', 'nome', 'cnpj', 'actions'];

  constructor(
    private service: BusinessService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.business$ = this.service.list().pipe(
      catchError((erro) => {
        this.onError('Erro ao carregar a lista de empresas');
        console.log(erro);
        return of([]);
      })
    );
  }

  ngOnInit(): void {
  }

  public onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
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

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Checklist } from 'src/app/core/models/checklist';
import { ErrorDialogComponent } from 'src/app/features/shared-module/components/error-dialog';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { ChecklistService } from '../../service/checklist.service';
import { PaginatorConfig2 } from './paginatorconfig2';

@Component({
  selector: 'app-list-checklist-monthly',
  templateUrl: './list-checklist-monthly.component.html',
  styleUrls: ['./list-checklist-monthly.component.css']
})
export class ListChecklistMonthlyComponent {

  checklist$!: Observable<Checklist[]>;

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

  displayedColumns = ['titulo','idBusiness' , 'idSetores', 'dataAuditoria', 'actions'];

  constructor(private service: ChecklistService,
    private notification: NotificationService,
    public dialog: MatDialog,
    private router: Router,){

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

  public handlePageEvent(e: PageEvent){
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.onpageList();
  }

  public onpageList(){
    this.service.getPageList(this.pageIndex, this.pageSize).subscribe({
      next: (res:any) => {
        console.log('CheckList:',res)
        this.checklist$ = res.content;
        this.paginator = res;
        this.length = this.paginator!.totalElements;
      },
      error: (err:any) => {
        this.onError('Erro ao carregar a lista de CheckList. Verifique sua conexão com o Banco de Dados!');
        console.log(err);
        return of([]);
      }, 
    });
  }

  public onCreateChecklist():void{}

  public onEdit():void{}

  public onDelete(){}

  public onCreateReport(){}

  public onError(errorMsg: string) { 
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
      width: '500px'
    });
  }
}
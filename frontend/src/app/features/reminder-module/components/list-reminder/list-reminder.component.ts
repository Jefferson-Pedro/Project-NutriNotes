import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Reminder } from 'src/app/core/models/Reminder';
import { ReminderService } from '../../services';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/features/shared-module/services/alert/alert.service';
import { ReminderPaginator } from './reminder-paginator';
import { of } from 'rxjs';

@Component({
  selector: 'app-list-reminder',
  templateUrl: './list-reminder.component.html',
  styleUrls: ['./list-reminder.component.css']
})
export class ListReminderComponent {

  reminder!: Reminder[];
  pageEvent: PageEvent | undefined;
  paginator: ReminderPaginator | undefined;;

  length = 50;
  pageSize = 0;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  displayedColumns = ['idReminder', 'titulo', 'descricao', 'date', 'actions'];

 public constructor(
    private service: ReminderService,
    private notification: NotificationService,
    private router: Router,
    private alert: AlertService
 ){
  this.onpageList();
 }

 handlePageEvent(e: PageEvent) {
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
       this.reminder = res.content;
       this.paginator = res;
      this.length = this.paginator!.totalElements;
    },
    error: (err) => {
      this.alert.onError(
        'Erro ao carregar a lista de eventos, verifique a conexão com o banco de dados!'
      );
      console.log(err);
      return of([]);
    },
  });
}

 public onCreateReminder(){}

 public onEdit(reminder: Reminder){}

 public onDelete(reminder: Reminder){}
}

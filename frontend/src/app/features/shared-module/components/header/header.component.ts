import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Reminder } from 'src/app/core/models/Reminder';
import { AuthService } from 'src/app/features/login-module/services/auth';
import { ReminderService } from 'src/app/features/reminder-module/services';
import { SidenavService } from '../../services/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  public navService = inject(SidenavService);
  private route = inject( Router);
  private auth = inject(AuthService);
  protected reminderService = inject(ReminderService);

  public badgevisible = false;
  showMenu: boolean = true; //Mudar para false;

  public list: Reminder[] = [];
  //public paginator!: ReminderPaginator[];

  constructor() {
    this.showReminderNotification();
    console.log(this.showReminderNotification());
  }

  //Tratando das notificações
  public badgeVisibility() {
    this.badgevisible = true;
  }

  public showReminderNotification() {
    this.reminderService.getPageList().subscribe({
      next: (res) => {
        //console.log('Informações do header', res);
        this.list = res.content;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}

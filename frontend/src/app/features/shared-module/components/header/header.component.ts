import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from '../../services/sidenav';
import { AuthService } from 'src/app/features/login-module/services/auth';
import { ReminderService } from 'src/app/features/reminder-module/services';
import { ReminderPaginator } from '../../../reminder-module/services/reminder-paginator';
import { Reminder } from 'src/app/core/models/reminder';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public badgevisible = false;
  showMenu: boolean = true; //Mudar para false;

  public list!: Reminder[];
  public paginator!: ReminderPaginator;

  constructor(public navService: SidenavService, 
              private route: Router, 
              private auth: AuthService,
              protected reminder: ReminderService) {
    
    this.showReminderNotification();
    console.log(this.showReminderNotification());
                
  }
  ngOnInit(): void {
    // this.auth.emitter.subscribe({
    //   next:(res: any)=>{this.showMenu = res},
    //   error:(err: any)=>{console.log(err);}
    // });            
  }

  //Tratando das notificações
  public badgeVisibility(){
    this.badgevisible = true;
  }

  public showReminderNotification(){
    this.reminder.getPageList().subscribe({
      next: (res) => {
        console.log(res);
        this.list = res.content;
      },
      error: (err) => {
        console.log(err);
      }, 
    });
  }

  public openAccount(){
    this.route.navigate(['account']);
  }

}

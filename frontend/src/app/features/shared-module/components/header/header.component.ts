import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from '../../services/sidenav';
import { AuthService } from 'src/app/core/services/auth';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public badgevisible = false;
  showMenu: boolean = true; //Mudar para false;

  constructor(public navService: SidenavService, private route: Router, private auth: AuthService) {
                
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

  public openAccount(){
    this.route.navigate(['account']);
  }

}

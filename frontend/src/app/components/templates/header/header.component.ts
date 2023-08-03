import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';
import { Router } from '@angular/router';
import { AuthService } from '../../sign-in/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public badgevisible = false;
  showMenu: boolean = true; //Mudar para false;

  constructor(public service: TemplateService, private route: Router, private auth: AuthService) {
                
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

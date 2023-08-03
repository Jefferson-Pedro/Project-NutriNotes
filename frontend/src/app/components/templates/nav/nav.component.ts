import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TemplateService } from '../template.service';
import { AuthService } from '../../sign-in/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {  

//  showMenu: boolean = false;

 constructor(public service: TemplateService ){
  
  // this.auth.emitter.subscribe({
  //   next:(res: any)=>{this.showMenu = res
  //   console.log('nav-var:',res)},
  //   error:(err: any)=>{console.log(err);}
  // });            private auth: AuthService
 }
 
}

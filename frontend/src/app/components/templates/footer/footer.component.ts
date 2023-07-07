import { AuthService } from './../../sign-in/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  showMenu: boolean = false;

  public constructor(private auth: AuthService){
      this.auth.emitter.subscribe({
        next:(res: any)=>{this.showMenu = res},
        error:(err: any)=>{console.log(err);}
      });
  }
}


import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  showMenu: boolean = true; //false;

  public constructor(private auth: AuthService){
      // this.auth.emitter.subscribe({
      //   next:(res: any)=>{this.showMenu = res},
      //   error:(err: any)=>{console.log(err);}
      // });
  }
}

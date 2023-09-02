import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private authUser = false;

  public emitter = new EventEmitter<boolean>();

  constructor(private route: Router) { } 

  public isAuth(): boolean{
      return true;
  }

  public loginValidation(login: string, senha:string){

   /* if (login === 'jefferson@nutri.com' && senha === '1234') {
      this.authUser = true;
      this.emitter.emit(true);
      this.route.navigate(['home']);
    } else {
      this.authUserTest = false;
      this.emitter.emit(false);
      alert('Erro! Usuário não encontrado!');
    }*/
  }

  public logout(){}

  public createUser(){}

}

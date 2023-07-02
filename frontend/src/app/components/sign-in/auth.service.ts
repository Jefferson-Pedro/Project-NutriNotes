import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private authUserTest = false;

  public emitter = new EventEmitter<boolean>();

  constructor(private route: Router) { } 

  public loginValidation(login: string, senha:string){

    if (login === 'jefferson@nutri.com' && senha === '1234') {
      this.authUserTest = true;
      this.emitter.emit(true);
      this.route.navigate(['home']);
    } else {
      this.authUserTest = false;
      this.emitter.emit(false);
      alert('Erro! Usuário não encontrado!');
    }
  }

  public createUser(){}

}

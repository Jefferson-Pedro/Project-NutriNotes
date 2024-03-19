import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthDTO } from 'src/app/core/models/AuthDTO';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

   // variável que irá ser setada com o tipo AuthDTO quando logado e null quando deslogado
   private loggedInUserInfo$ = new BehaviorSubject<AuthDTO | null>(null);

   // variável que será usada para armazenar o valor da variável acima
   public isLoggedInUser$ = this.loggedInUserInfo$.asObservable();
 

  constructor() { }

  public saveLoggedInUserInfo(userInfo: AuthDTO){
    localStorage.setItem("NutriToken", JSON.stringify(userInfo));

    this.loggedInUserInfo$.next(userInfo);
  }

  public getLoggedInUserInfo():string | null{
    return localStorage.getItem('NutriToken');
  }

  public removeLoggedInUserInfo(): void{
    localStorage.removeItem('NutriToken');
    
    this.loggedInUserInfo$.next(null);
  }

}

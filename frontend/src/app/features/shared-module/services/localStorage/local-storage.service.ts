import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthDTO } from 'src/app/core/models/AuthDTO';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

   // variável que irá ser setada com o tipo AuthDTO quando logado e null quando deslogado
   private isLogged$ = new BehaviorSubject<AuthDTO | null>(null);

   // variável que será usada para armazenar o valor da variável acima
   public isLoggedInUser$ = this.isLogged$.asObservable();
 

  constructor() { }

  public saveLoggedInUserInfo(res: AuthDTO){
    localStorage.setItem("NutriToken", JSON.stringify(res));

    this.isLogged$.next(res);
  }

  public getLoggedInUserInfo():string | null{
    return localStorage.getItem('NutriToken');
  }

  public removeToken(): void{
    localStorage.removeItem('NutriToken');
    
    this.isLogged$.next(null);
  }

}

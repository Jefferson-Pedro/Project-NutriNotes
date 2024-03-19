import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthDTO } from 'src/app/core/models/AuthDTO';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

   // variável que irá ser setada true quando logado e false quando deslogado
   private isLogged$ = new BehaviorSubject<boolean>(false);

   // variável que será usada para armazenar o valor da variável acima
   public isLoggedIn$ = this.isLogged$.asObservable();
 

  constructor() { }

  public insertToken(res: AuthDTO): void{
      localStorage.setItem("NutriToken", res.token);

      this.isLogged$.next(true);
  }

  public getToken():string | null{
    return localStorage.getItem('NutriToken');
  }

  public removeToken(): void{
    localStorage.removeItem('NutriToken');
    
    this.isLogged$.next(false);
  }
}

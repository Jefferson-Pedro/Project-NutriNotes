import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { DecodeToken } from 'src/app/core/models/DecodeToken';
import { LoginUserResponse } from 'src/app/core/models/LoginUserResponse';
import { jwtDecoder } from 'src/app/core/utils/jwt-decoder';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // variável que irá ser setada true quando logado e false quando deslogado
  private _loggedUser$ = new BehaviorSubject<DecodeToken | null>(null);

  // variável que será usada para armazenar o valor da variável acima
  public loggedUser$ = this._loggedUser$.asObservable();


 constructor() { }

  public insertToken(response: LoginUserResponse): void{
      localStorage.setItem("NutriToken", response.token);

      const decodedToken = this.getDecodeToken(response);

     this._loggedUser$.next(decodedToken);
  }

  public getToken():string | null{
    return localStorage.getItem('NutriToken');
  }

  public removeToken(): void{
    localStorage.removeItem('NutriToken');
    
    this._loggedUser$.next(null);
  }

  private getDecodeToken(response: LoginUserResponse): DecodeToken{
    const decodedToken = jwtDecoder(response.token); 
    
    return {
      id: decodedToken.sub,
      email: decodedToken.email,
      signature: decodedToken.iss
    }
  }

}


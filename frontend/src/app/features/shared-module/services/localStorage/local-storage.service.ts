import { Injectable } from '@angular/core';
import { DecodeToken } from 'src/app/core/models/DecodeToken';
import { User } from 'src/app/core/models/User';
import { jwtDecoder } from 'src/app/core/utils/jwt-decoder';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  public insertToken(key: string , value: string | User): void{

    localStorage.setItem(key, JSON.stringify(value));
  }

  public clearLocalStorage(): void{

    localStorage.clear();
  }

  public getDecodeToken(): DecodeToken{

    const token = localStorage.getItem('NutriToken') || '';
    const decodedToken = jwtDecoder(token) ;

    return {
      id: decodedToken.sub,
      email: decodedToken.email,
      signature: decodedToken.iss
    }
  }

}


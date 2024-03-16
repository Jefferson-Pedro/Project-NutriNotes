import { Injectable } from '@angular/core';
import { AuthDTO } from 'src/app/core/models/AuthDTO';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public insertToken(res: AuthDTO): boolean{
    if(res.token != null){
      localStorage.setItem("NutriToken", res.token);
      return true;
    }
    return false;    
  }

  public getToken():string | null{
   const token =  localStorage.getItem("NutriToken");
   if(token != null){
    return token
   }
    return null;
  }

  public removeToken(): boolean{
    localStorage.clear();
    if(localStorage.length === 0){
      return true
    }
    return false;
  }
}

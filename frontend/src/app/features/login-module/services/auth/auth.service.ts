import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/app/core/models/LoginDTO';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private authUser: boolean = false;

  public emitter = new EventEmitter<boolean>();
  private route = inject(Router);
  private http = inject(HttpClient);

  constructor() { } 

  public loginValidation(login:LoginDTO): Observable<LoginDTO>{
    const url = `${environment.baseUrl}/login`;
    
    return this.http.post<LoginDTO>(url, login);
  }

  public logout(){}

  public createUser(){}

}

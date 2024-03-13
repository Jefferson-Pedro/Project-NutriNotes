import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay } from 'rxjs';
import { AuthDTO } from 'src/app/core/models/AuthDTO';
import { LoginDTO } from 'src/app/core/models/LoginDTO';
import { User } from 'src/app/core/models/Users';
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

  public loginValidation(login:LoginDTO): Observable<AuthDTO>{
    const url = `${environment.baseUrl}/login`;
    
    return this.http.post<AuthDTO>(url, login).pipe(delay(2000));
  }

  public logout(){}

  public createUser(user: User): Observable<User>{
    const url = `${environment.baseUrl}/user/new`;

    return this.http.post<User>(url, user).pipe(delay(2000));
  }

}

import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay } from 'rxjs';
import { Login } from 'src/app/core/models/Login';
import { LoginUserResponse } from 'src/app/core/models/LoginUserResponse';
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

  public loginValidation(login:Login): Observable<LoginUserResponse>{
    const url = `${environment.baseUrl}/login`;

    return this.http.post<LoginUserResponse>(url, login).pipe(delay(1500));
  }

  public logout(){}

}

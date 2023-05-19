import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Business } from '../models/business';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private baseUrl = 'http://localhost:8080/business';

  constructor(private route: Router, 
              private snackBar: MatSnackBar,
              private http:HttpClient) { }
  
  public showMessageSucess(msg: string): void{
    this.snackBar.open(msg, 'x',{
      duration: 4000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  public showMessageFail(msg: string): void{
    this.snackBar.open(msg, 'x',{
      duration: 4000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  public list(){
    return this.http.get<Business[]>(this.baseUrl)
    .pipe(first(),
     //delay(3000)
     );
  }
  
  public create(business:Business): Observable<Business>{
    return this.http.post<Business>(this.baseUrl, business);
  }

}

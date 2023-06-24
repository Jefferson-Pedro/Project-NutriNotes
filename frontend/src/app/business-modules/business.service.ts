import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Business } from '../models/business';
import { delay, first } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

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

  public searchCep(cep:string): Observable<any>{
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  public list(){
    return this.http.get<Business[]>(`${environment.baseUrl}/business`)
    .pipe(first(), 
     delay(1000)
     );
  }
  
  public create(business:Business): Observable<Business>{
    return this.http.post<Business>(`${environment.baseUrl}/new`, business);
  }

  public loadById(id: Number){
    return this.http.get<Business>(`${environment.baseUrl}/business/${id}`);
  }

  public delete(id: Number){
    return this.http.delete(`${environment.baseUrl}/business/${id}`);
  }

  public update(business: Business, id: number): Observable<Business>{
    return this.http.put<Business>(`http://localhost:8080/business/edit/${id}`, business);
    //(`${environment.baseUrl}/edit/${id}`, business); 
  }

}

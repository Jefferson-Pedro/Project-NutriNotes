import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Business } from '../models/business';
import { delay, first, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { PaginatorConfig } from './list-business/paginatorConfig';

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
    return this.http.get<Business[]>(`${environment.baseUrl}/business/all`)
    .pipe(first(), 
     delay(1000)
     );
  }
  
  public getPageList(page?: number, size?:number): Observable<any>{
    if(page == undefined && size == undefined){
      page = 0
      size = 5
    }
    return this.http.get<Business>
    (`${environment.baseUrl}/business?page=${page}&size=${size}`); 
  }
  
  public create(business:Business): Observable<Business>{
    return this.http.post<Business>(`${environment.baseUrl}/business/new`, business);
  }

  public loadById(id: Number){
    return this.http.get<Business>(`${environment.baseUrl}/business/${id}`);
  }

  public delete(id: Number){
    return this.http.delete(`${environment.baseUrl}/business/${id}`);
  }

  public update(business: Business): Observable<Business>{
    return this.http.put<Business>
    (`${environment.baseUrl}/business/edit/${business.idBusiness}`,business);
  }

  //Cria ou Atualiza uma empresa.
  public save(business: Business){
    if(business.idBusiness){
      return this.update(business);
    }
    return this.create(business);
  }
}

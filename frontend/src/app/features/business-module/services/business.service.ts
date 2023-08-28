import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { delay, first, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Business } from 'src/app/core/models/business';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private route: Router, 
              private snackBar: MatSnackBar,
              private http:HttpClient) { }
  
  //Criar serviço dentro de shared para notification shared/services/notification
  public showMessageSucess(msg: string): void{
    this.snackBar.open(msg, 'x',{
      duration: 4000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
  //Criar serviço dentro de shared para notification shared/services/notification
  public showMessageFail(msg: string): void{
    this.snackBar.open(msg, 'x',{
      duration: 4000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
//Criar serviço dentro de shared para busca de cep shared/services/cep
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
    if(page ==  0 && size == 0){
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

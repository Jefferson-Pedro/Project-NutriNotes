import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(private http:HttpClient) { }

  public searchCep(cep:string): Observable<any>{
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
  }

}

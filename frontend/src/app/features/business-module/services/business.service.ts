import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, first } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Business } from 'src/app/core/models/Business';
import { Department } from 'src/app/core/models/Department';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {



  constructor(private route: Router, private http: HttpClient) {}

  public list() {
    const url = `${environment.baseUrl}/business/all`;

    return this.http.get<Business[]>(url).pipe(first(), delay(1000));
  }

  public getPageList(page = 0 , size = 5): Observable<any> {

   const url = `${environment.baseUrl}/business?page=${page}&size=${size}`;

    return this.http.get<Business>(url);
  }

  public create(business: Business): Observable<Business> {
    const url = `${environment.baseUrl}/business/new`;

    return this.http.post<Business>(url, business);
  }

  public loadById(id: Number) {
    const url = `${environment.baseUrl}/business/${id}`;

    return this.http.get<Business>(url);
  }

  public delete(id: Number) {
    const url = `${environment.baseUrl}/business/${id}`;

    return this.http.delete(url);
  }

  public update(business: Business): Observable<Business> {
    const url = `${environment.baseUrl}/business/edit/${business.idBusiness}`;

    return this.http.put<Business>(url, business);
  }

  public findDepartmentByBusiness(id: number) {
    const url = `${environment.baseUrl}/department/bybusiness/${id}`;

    return this.http.get<Department[]>(url).pipe(first(), delay(1000));
  }

  //Cria ou Atualiza uma empresa.
  // public save(business: Business) {
  //   if (business.idBusiness) {
  //     return this.update(business);
  //   }
  //   return this.create(business);
  // }
}

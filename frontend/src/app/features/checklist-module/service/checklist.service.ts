import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, first } from 'rxjs';
import { Business } from 'src/app/core/models/Business';
import { Checklist } from 'src/app/core/models/Checklist';
import { QuestionInfo } from 'src/app/core/models/QuestionInfo';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class ChecklistService {

  private baseUrl = environment.baseUrl;

  constructor(private router: Router, private http: HttpClient) {}

  public list(): Observable<Checklist[]> {
    const url = `${this.baseUrl}/checklist/all`
    
    return this.http.get<Checklist[]>(url);
  }

  public getPageList(page = 0 , size = 5): Observable<any> {
    const url = `${this.baseUrl}/checklist?page=${page}&size=${size}`;
    
    return this.http.get<Checklist>(url);
  }

  public create() {}
  public update() {}
  public delete() {}

  public listBusiness(): Observable<Business[]> {
    const url = `${this.baseUrl}/business/all`;

    return this.http.get<Business[]>(url);
  }

  public listQuestions(id: number) {
    const url = `${this.baseUrl}/question/template/${id}`;
    
    return this.http.get<QuestionInfo[]>(url);
  } 
}

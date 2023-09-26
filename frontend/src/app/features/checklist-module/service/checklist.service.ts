import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, first } from 'rxjs';
import { Checklist } from 'src/app/core/models/Checklist';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  constructor(private router: Router, private http: HttpClient) {}

  public list(): Observable<Checklist[]> {
    return this.http
      .get<Checklist[]>(`${environment.baseUrl}/checklist/all`)
      .pipe(first(), delay(1000));
  }

  public getPageList(page?: number, size?: number): Observable<any> {
    if (page == 0 && size == 0) {
      page = 0;
      size = 5;
    } 
    return this.http.get<Checklist>(
      `${environment.baseUrl}/checklist?page=${page}&size=${size}`
    );
  }
  public create() {}
  public update() {}
  public delete() {}

  public listQuestions() {}
}

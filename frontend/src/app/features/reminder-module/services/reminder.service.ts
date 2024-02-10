import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, first } from 'rxjs';
import { Reminder } from 'src/app/core/models/Reminder';
import { environment } from 'src/environments/environment.development';
import { ReminderPaginator } from '../components/list-reminder/reminder-paginator';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {

  private baseUrl = environment.baseUrl;

  constructor(private router: Router, private http: HttpClient) {}

  public list(): Observable<Reminder[]> {
    const url = `${environment.baseUrl}/reminder/all`;

    return this.http.get<Reminder[]>(url).pipe(first());
  }

  public getPageList(page = 0, size = 5): Observable<any> {
    const url = `${this.baseUrl}/reminder?page=${page}&size=${size}`;
  
    return this.http.get<Reminder>(url);
  }
  
  public create(reminder: Reminder): Observable<Reminder> {
    const url = `${environment.baseUrl}/reminder/new`;

    return this.http.post<Reminder>(url, reminder);
  }
}

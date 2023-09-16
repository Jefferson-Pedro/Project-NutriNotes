import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reminder } from 'src/app/core/models/Reminder';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {
  constructor(private router: Router, private http: HttpClient) {}

  public getPageList(page?: number, size?: number): Observable<any> {
    if (page == 0 || (null && size == 0) || null) {
      page = 0;
      size = 5;
    }
    return this.http.get<Reminder>(
      `${environment.baseUrl}/reminder?page=${page}&size=${size}`
    );
  }
}

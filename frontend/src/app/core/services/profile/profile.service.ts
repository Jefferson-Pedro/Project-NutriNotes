import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Profile } from '../../models/profile';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfileService { 

  constructor(private http:HttpClient) { }

  public create(profile:Profile): Observable<Profile>{
    return this.http.post<Profile>(`${environment.baseUrl}/profile`, profile);
  }
}

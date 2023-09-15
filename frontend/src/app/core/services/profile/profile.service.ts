import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Profile } from '../../models/profile';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfileService { 

  private URL_BASE = environment.baseUrl;

  constructor(private http:HttpClient) { }

  public create(profile:Profile): Observable<Profile>{
    const url = `${environment.baseUrl}/profile`;

    return this.http.post<Profile>(url, profile);
  }

  public update(profile:Profile): Observable<Profile>{
    const url = `${environment.baseUrl}/profile/edit/${profile.idProfile}`

    return this.http.put<Profile>(url, profile); 
  }
}

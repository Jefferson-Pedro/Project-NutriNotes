import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { User } from '../../models/User';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private URL_BASE = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public create(user: User): Observable<User> {
    const url = `${environment.baseUrl}/user/new`;

    return this.http.post<User>(url, user);
  }

  public update(user: User): Observable<User> {
    const url = `${environment.baseUrl}/user/edit/${user.idUser}`;

    return this.http.put<User>(url, user);
  }
}

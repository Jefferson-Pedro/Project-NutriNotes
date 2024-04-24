import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { CreateUser } from '../../models/CreateUser';
import { EditUser } from '../../models/EditUser';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private URL_BASE = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public create(user: CreateUser): Observable<CreateUser> {
    const url = `${environment.baseUrl}/user/new`;

    return this.http.post<CreateUser>(url, user);
  }

  public update(user: EditUser): Observable<EditUser> {
    const url = `${environment.baseUrl}/user/edit/${user.idUser}`;

    return this.http.put<EditUser>(url, user);
  }

  public findUserById(id: Number) {
    const url = `${environment.baseUrl}/user/${id}`;

    return this.http.get<any>(url);
  }
}

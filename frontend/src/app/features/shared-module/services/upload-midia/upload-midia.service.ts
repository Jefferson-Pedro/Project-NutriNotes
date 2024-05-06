import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UploadMidiaService {

  private http = inject(HttpClient);
  private URL_BASE = environment.baseUrl;

  constructor() {}

  public create(photo_profile: FormData, id:Number): Observable<any> {
    const url = `${environment.baseUrl}/midia/upload?id=${id}`;

    return this.http.post<FormData>(url, photo_profile);
  }
}

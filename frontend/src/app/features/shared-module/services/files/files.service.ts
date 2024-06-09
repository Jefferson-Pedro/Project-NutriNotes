import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private http = inject(HttpClient);
  private URL_BASE = environment.baseUrl;

  constructor() {}

  public create(photo_profile: FormData, id:Number): Observable<any> {
    const url = `${environment.baseUrl}/files/upload?id=${id}`;

    return this.http.post(url, photo_profile, {responseType: 'text'});
  }

  public getImage (filename: string): Observable<Blob>{

    const url = filename;

    return this.http.get(url,  {responseType: 'blob' });
  }
}

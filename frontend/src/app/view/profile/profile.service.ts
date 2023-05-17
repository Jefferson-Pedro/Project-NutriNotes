import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Profile } from 'src/app/models/profile';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProfileService { 

  private baseUrl = 'http://localhost:8080/profile';

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  public showMessageSucess(msg: string): void{
    this.snackBar.open(msg, 'x',{
      duration: 4000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  public showMessageFail(msg: string): void{
    this.snackBar.open(msg, 'x',{
      duration: 4000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  public create(profile:Profile ): Observable<Profile>{
    return this.http.post<Profile>(this.baseUrl, profile);
  }
}

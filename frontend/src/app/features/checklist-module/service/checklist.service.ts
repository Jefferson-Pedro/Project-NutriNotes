import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { delay, first } from 'rxjs';
import { Checklist } from 'src/app/core/models/checklist';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor(private router: Router, 
    private snackBar: MatSnackBar,
    private http:HttpClient) { }

    public list(){
      return this.http.get<Checklist[]>(`${environment.baseUrl}/checklist/all`)
      .pipe(first(), 
       delay(1000)
       );
    }
}

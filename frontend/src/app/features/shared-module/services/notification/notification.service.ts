import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor( private snackBar: MatSnackBar) {  }

  public showMessageSucess(msg: string): void{
    this.snackBar.open(msg, 'x',{
      duration: 4000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass:['notification-success']
    })
  }

  public showMessageFail(msg: string): void{
    this.snackBar.open(msg, 'x',{
      duration: 4000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass: ['snackbar-error']
    })
  }
}

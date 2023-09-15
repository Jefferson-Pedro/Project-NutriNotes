import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public onError(msg: string){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: msg,
    });
  }

  public onSucess(title: string, msg: string){
    Swal.fire({
      icon: 'success',
      title: title,
      text: msg,
    });
  }

  public onQuestion(){}
}

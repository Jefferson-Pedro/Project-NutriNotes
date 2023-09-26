import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { CssDirective } from './../../directives/css/css.directive';

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

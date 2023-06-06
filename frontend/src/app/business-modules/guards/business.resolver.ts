import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BusinessService } from '../business.service';
import { Business } from 'src/app/models/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessResolver implements Resolve<Business> {

  constructor(private service: BusinessService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Business> {

    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }
    return of({ 
      nome: '',
      cnpj: '',
     /* cep: '',
      telefone: '',
      logradouro: '',
      compl: '',
      cidade: '',
      bairro: '',
      uf: '',
      representante: '',
      responsavelTec: '',
      plano: ''
    */});
  }
}

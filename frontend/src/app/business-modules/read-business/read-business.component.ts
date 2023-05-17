import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/models/business';

@Component({
  selector: 'app-read-business',
  templateUrl: './read-business.component.html',
  styleUrls: ['./read-business.component.css']
})
export class ReadBusinessComponent implements OnInit {

  business:Business[] = [
    { idBusiness: 1, nome: 'Empresa 1', cnpj:'123456789'}
  ];

  displayedColumns = ['idBusiness', 'nome', 'cnpj'];

  constructor(){}
  ngOnInit(): void {
    console.log('iniciou!');
  }
}

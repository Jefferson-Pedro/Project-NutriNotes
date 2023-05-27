import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from '../business.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.css']
})
export class CreateBusinessComponent implements OnInit{
  
  form: FormGroup;

  constructor(private route:Router, private service: BusinessService, 
    private formBuilder: FormBuilder){
      this.form = this.formBuilder.group({
        nome: [''],
        cnpj: [''],
        cep: [''],
        telefone: [''],
        logradouro: [''],
        compl: [''],
        cidade: [''],
        bairro: [''],
        uf: [''],
        representante: [''],
        responsavelTec: ['1'],
        plano: ['']
      });
  }
  ngOnInit(): void {}

  public onSubmit(){
    this.service.create(this.form.value).subscribe({
      next: () => {
        console.log(this.form.value);
        this.service.showMessageSucess('Sucesso! Empresa cadastrada');
        
      },
      error: (err) => {
          this.service.showMessageFail('Ocorreu um erro ao salvar as informações de empresa');
      }
    });
  }

  public onCancel(){
    this.route.navigate(['']);
  }
}

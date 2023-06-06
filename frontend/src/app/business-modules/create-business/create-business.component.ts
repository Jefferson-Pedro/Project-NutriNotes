import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from '../business.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Business } from 'src/app/models/business';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.css']
})
export class CreateBusinessComponent implements OnInit{
  
  form: FormGroup;

  constructor(private router:Router, private service: BusinessService, 
    private formBuilder: FormBuilder, private route: ActivatedRoute){

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
        responsavelTec: [{"idProfile": 1}],
        plano: ['']
      });
  }
  ngOnInit(): void {}

  public onSubmit(){
    console.log(this.form.value);
    this.service.create(this.form.value).subscribe({
      next: (res:any) => {
        console.log(res);
        this.service.showMessageSucess('Sucesso! Empresa cadastrada');
      },
      error: (err) => {
          this.service.showMessageFail('Ocorreu um erro ao salvar as informações de empresa');
      }
    });
  }

  public onCancel(){
    this.router.navigate(['']);
  }
}

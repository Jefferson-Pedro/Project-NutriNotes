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

  public validationCep(){

    console.log(this.form.value.cep);
    let cep = this.form.value.cep

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
       let validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if(validacep.test(cep)) {
        this.search(cep);
      }else{
        alert('CEP invalido! Verifique a informação e tente novamente.');
      }
    }
  }

  public search(cep: string){
    
    this.service.searchCep(cep).subscribe({
      next:(res:any) =>{
        this.fillForms(res, this.form);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public fillForms(res:any, form:any){
    form.patchValue({
      cep: res.cep,
      logradouro: res.logradouro,
      compl: res.complemento,
      cidade: res.localidade,
      bairro: res.bairro,
      uf: res.uf,
    });
  }

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

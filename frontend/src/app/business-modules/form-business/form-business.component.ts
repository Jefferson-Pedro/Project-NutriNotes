import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from '../business.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Business } from 'src/app/models/business';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-form-business',
  templateUrl: './form-business.component.html',
  styleUrls: ['./form-business.component.css'],
})
export class FormBusinessComponent implements OnInit {
  form: FormGroup;
  id: any;

  constructor(
    private router: Router,
    private service: BusinessService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: [''],
      cep: ['', [Validators.required, Validators.minLength(8)]],
      telefone: [''],
      logradouro: [''],
      compl: [''],
      cidade: [''],
      bairro: [''],
      uf: [''],
      representante: [''],
      responsavelTec: [{ idProfile: 1 }],
      plano: [''],
    });
  }
  ngOnInit(): void {
    // this.route.params.subscribe(
    //   (value: any) => {
    //       const id = value['id'];
    //       this.service.loadById(id).subscribe(
    //         business => {
    //           this.onUpdateBusiness(business);
    //         }
    //       );
    //    },
    // )
    this.id = this.route.snapshot.params['id'];
    this.route.params.pipe(
      map((params: any) => params['id']),
      switchMap(id => this.service.loadById(id)))
      .subscribe(business => this.onUpdateBusiness(business));
  }

  public validationCep() {
    let cep = this.form.value.cep;
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != '') {
      //Expressão regular para validar o CEP.
      let validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.search(cep);
      } else {
        alert('CEP invalido! Verifique a informação e tente novamente.');
      }
    }
  }

  public search(cep: string) {
    this.service.searchCep(cep).subscribe({
      next: (res: any) => {
        this.fillForms(res, this.form);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public fillForms(res: any, form: any) {
    form.patchValue({
      cep: res.cep,
      logradouro: res.logradouro,
      compl: res.complemento,
      cidade: res.localidade,
      bairro: res.bairro,
      uf: res.uf,
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.service.showMessageSucess('Sucesso! Empresa cadastrada');
        },
        error: (err) => {
          this.service.showMessageFail(
            'Ocorreu um erro ao salvar as informações de empresa'
          );
        },
      });
    }
  }

  public onUpdateBusiness(business: Business){
    /*this.form.patchValue({
      nome: business.nome,
      cnpj:  business.cnpj,
      cep:  business.cep,
      telefone:  business.telefone,
      logradouro:  business.logradouro,
      compl:  business.compl,
      cidade: business.cidade,
      bairro:  business.bairro,
      uf:  business.uf,
      representante:  business.representante,
      responsavelTec: [{ idProfile: 1 }],
      plano:  business.plano,
    })*/
    this.form.patchValue(business);
  }

  public onCancel() {
    this.router.navigate(['']);
  }
}

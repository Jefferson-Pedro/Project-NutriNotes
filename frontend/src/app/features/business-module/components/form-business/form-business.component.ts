import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Business } from 'src/app/core/models/business';
import { ViaCepService } from 'src/app/features/shared-module/services/cep';
import { BusinessService } from '../../services';
import { NotificationService } from 'src/app/features/shared-module/services/notification';

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
    private viacep: ViaCepService,
    private notification: NotificationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    // INICIA O FORMS VAZIO E FAZ A PRÉ VALIDAÇÃO
    this.form = this.formBuilder.group({
      idBusiness:[null],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.minLength(14)]],
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
    // FAZ A CHAMADA PARA O DATABASE, RETORNA UM OBJETO COM BASE NO ID DA URL
    this.id = this.route.snapshot.params['id'];
    this.route.params.pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.service.loadById(id))
      )
      .subscribe((business) => this.onUpdateBusiness(business));
  }

  public validationCep() {
    //          VALIDA O CEP
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
    //FAZ A CHAMADA PARA API VIACEP E RETORNA OS DADOS
    this.viacep.searchCep(cep).subscribe({
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
    //PREENCHE OS CAMPOS DE ENDEREÇO COM A API VIA CEP
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

    if (this.form.valid) { //Para Salvar informações
      let msgSucess = 'Sucesso! Empresa cadastrada';
      let msgError = 'Ocorreu um erro ao salvar as informações de empresa';

      if (this.form.value.idBusiness) { //Para atualizar informações
        msgSucess = 'Empresa atualizada com sucesso!';
        msgError = 'Ocorreu um erro ao atualizar as informações de empresa.';
      }
        this.service.save(this.form.value).subscribe({
          next: (res: any) => {
            this.notification.showMessageSucess(msgSucess);
            this.router.navigate(['business/list']);
          },
          error: (err: any) => {
            this.notification.showMessageFail(msgError);
            console.log(err);
          },
        });
    }else{
      alert('Existem campos preenchidos incorretamente, verifique-os e tente novamente!')
    }
  }

  public onUpdateBusiness(business: Business) {
    //PRENCHE O FORMS PARA EDIÇÃO
    this.form.patchValue(business);
  }

  public onCancel() {
    this.router.navigate(['home']);
  }
}

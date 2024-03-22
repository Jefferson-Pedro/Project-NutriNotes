import { Component, OnInit, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { CepResponse } from 'src/app/core/models/CepResponse';
import { validateCEP } from 'src/app/core/utils/validate-cep';
import { AlertService } from 'src/app/features/shared-module/services/alert/alert.service';
import { ViaCepService } from 'src/app/features/shared-module/services/cep';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { BusinessService } from '../../services';
import { Business } from 'src/app/core/models/Business';
import { CreateUser } from 'src/app/core/models/CreateUser';

@Component({
  selector: 'app-form-business',
  templateUrl: './form-business.component.html',
  styleUrls: ['./form-business.component.css'],
})
export class FormBusinessComponent implements OnInit {
  private router = inject(Router);
  private alertService = inject(AlertService);
  private viacepService = inject(ViaCepService);
  private activatedRoute = inject(ActivatedRoute);
  private businessService = inject(BusinessService);
  private notification = inject(NotificationService);
  private formBuilder = inject(NonNullableFormBuilder);

  protected form = this.buildForm();
  protected business!: Business;
  protected submitted = false;

  ngOnInit(): void {
    this.loadBusinessById();
  }

  protected onSubmit(): void {
    console.log('FORMULARIO NO SUBMIT:',this.form.value);

    this.submitted = true;

    if (this.form.invalid) {
      this.notification.showMessageFail(
        'Preencha todos os campos corretamente!'
      );
      return;
    }
    if (this.business.idBusiness != undefined) {
      // SE A EMPRESA EXISTIR, É EXECUTADA A FUNÇÃO DE ALTERAÇÃO
      this.updateBusiness();
      return; // QUEBRA A FUNÇÃO E NÃO EXECUTA NENHUM CÓDIGO QUE ESTÁ ABAIXO
    }else{
      this.createBusiness(); // CASO A EMPRESA NÃO EXISTA, É EXECUTADA A FUNÇÃO DE CRIAÇÃO    
    }
  }

  private buildForm() {
    // INICIA O FORMULÁRIO VAZIO E FAZ A PRÉ VALIDAÇÃO
    return this.formBuilder.group({
      idBusiness: [null],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.minLength(14)]],
      cep: ['', [Validators.required, Validators.minLength(8)]],
      logradouro: ['', [Validators.required, Validators.minLength(5)]],
      cidade: ['', [Validators.required, Validators.minLength(5)]],
      bairro: ['', [Validators.required, Validators.minLength(5)]],
      uf: ['', [Validators.required, Validators.minLength(2)]],
      representante: ['', [Validators.required, Validators.minLength(5)]],
      plano: ['', Validators.required],
      responsavelTec: [{ idProfile: 1 }],
      compl: [''],
      telefone: [''],
    });
  }
  

  protected validationCep(): void {
    // Armazena o valor do CEP digitado no formulário na variável
    const cep = this.form.controls.cep?.value;

    //Verifica se o CEP não é null, caso seja, quebra a função
    if (!cep) {
      return;
    }

    // Verifica se o formato do CEP, é um formato válido, caso sim, faz a busca e quebra a função
    if (validateCEP(cep)) {
      this.search(cep);
      return;
    }

    // Caso o CEP não seja válido, exibe um alerta de erro
    this.alertService.onError(' O CEP preenchido não é valido!');
  }

  private search(cep: string) {
    //FAZ A CHAMADA PARA API VIACEP E RETORNA OS DADOS
    this.viacepService.searchCep(cep).subscribe({
      next: (cepResponse: CepResponse) => {
        this.fillCepForms(cepResponse);
        console.log(cepResponse);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  private fillCepForms(cepResponse: CepResponse) {
    //PREENCHE OS CAMPOS DE ENDEREÇO COM A API VIA CEP
    this.form.patchValue({
      cep: cepResponse.cep,
      logradouro: cepResponse.logradouro,
      compl: cepResponse.complemento,
      cidade: cepResponse.localidade,
      bairro: cepResponse.bairro,
      uf: cepResponse.uf,
    });
  }

  private createBusinessPayload(): Business {
    const form = this.form.getRawValue();
    const responsavelTec = {idProfile: 1,};
  

    return {
      nome: form.nome,
      cnpj: form.cnpj,
      bairro: form.bairro,
      cep: form.cep,
      cidade: form.cidade,
      compl: form.compl,
      logradouro: form.logradouro,
      plano: form.plano,
      representante: form.representante,
      telefone: form.telefone,
      uf: form.uf,
      //responsavelTec: responsavelTec as CreateUser, //GAMBIARRA TEMPORARIA
      idBusiness: form.idBusiness
    };
  }

  private createBusiness(): void {
    //SALVA UMA EMPRESA
    this.businessService.create(this.createBusinessPayload()).subscribe({
      next: (res) => {
        this.notification.showMessageSucess('Sucesso! Empresa cadastrada');
        this.router.navigate(['business/list']);
        console.log(res);
      },
      error: (err) => {
        this.notification.showMessageFail(
          'Ocorreu um erro ao salvar as informações de empresa.'
        );
        console.log(err);
      },
    });
  }

  private updateBusinessPayload(): Business {
    const form = this.form.getRawValue();
    console.log('FORMULARIO COM VALORES CRUS: ', form);
    return {
      idBusiness: form.idBusiness,
      nome: form.nome,
      cnpj: form.cnpj,
      bairro: form.bairro,
      cep: form.cep,
      cidade: form.cidade,
      compl: form.compl,
      logradouro: form.logradouro,
      plano: form.plano,
      representante: form.representante,
      telefone: form.telefone,
      uf: form.uf,
     // responsavelTec: form.responsavelTec as CreateUser,//GAMBIARRA TEMPORARIA
    };
  }

  private updateBusiness(): void {
    //ALTERA UMA EMPRESA
    this.businessService.update(this.updateBusinessPayload()).subscribe({
      next: (res) => {
        this.notification.showMessageSucess('Sucesso! Empresa alterada');
        this.router.navigate(['business/list']);
        console.log(res);
      },
      error: (err) => {
        this.notification.showMessageFail(
          'Ocorreu um erro ao alterar as informações de empresa.'
        );
        console.log(err);
      },
    });
  }

  private loadBusinessById(): void {
    // FAZ A CHAMADA PARA O DATABASE, RETORNA UM OBJETO COM BASE NO ID DA URL
    this.activatedRoute.params
      .pipe(
        map((params) => {
          return params['id'];
        }),
        switchMap((id) => {
          return id !== undefined
          ? this.businessService.loadById(id)
          : of({} as Business);
        })
      )
      .subscribe({
        next: (business) => {
          console.log('OBJETO DO BANCO:',business);
          this.business = business;
          this.form.patchValue(business as Partial<{ idBusiness: any; nome: string; cnpj: string; cep: string; logradouro: string; cidade: string; bairro: string; uf: string; representante: string; plano: string; responsavelTec: { idProfile: number; }; compl: string; telefone: string; }>)
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  public onCancel(): void {
    this.router.navigate(['home']);
  }
}

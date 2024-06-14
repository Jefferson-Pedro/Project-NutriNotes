import { Component, Input, OnInit, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { CepResponse } from 'src/app/core/models/CepResponse';
import { validateCEP } from 'src/app/core/utils/validate-cep';
import { AlertService } from 'src/app/features/shared-module/services/alert/alert.service';
import { ViaCepService } from 'src/app/features/shared-module/services/cep';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { BusinessService } from '../../services';
import { CreateUser } from 'src/app/core/models/CreateUser';
import { LocalStorageService } from 'src/app/features/shared-module/services/localStorage';
import { UserService } from 'src/app/core/services/user';
import { BusinessCreate } from 'src/app/core/models/BusinessCreate';
import { BusinessResponse } from 'src/app/core/models/BusinessResponse ';

@Component({
  selector: 'app-form-business',
  templateUrl: './form-business.component.html',
  styleUrls: ['./form-business.component.css'],
})
export class FormBusinessComponent implements OnInit {

  @Input() id!: string;

  private router = inject(Router);
  private alertService = inject(AlertService);
  private viacepService = inject(ViaCepService);
  private activatedRoute = inject(ActivatedRoute);
  private businessService = inject(BusinessService);
  private notification = inject(NotificationService);
  private localStorageService = inject(LocalStorageService);
  private userService = inject(UserService);
  private formBuilder = inject(NonNullableFormBuilder);

  protected form = this.buildForm();
  protected businessCreate!: BusinessCreate;
  protected businessResponse!: BusinessResponse
  protected submitted = false;
  private  userId!: Number;
  protected loading!: boolean;

  ngOnInit(): void {
    this.loadUserById();
    this.loadBusinessById();
    console.log(this.id);
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
    if (this.businessCreate.idBusiness) {
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
      responsavelTec: [''], //[null as CreateUser | null],
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

  private loadUserById(): void {

    this.loading = true;
    this.userId = +this.localStorageService.getDecodeToken()!.id; //Uma forma de converter para Number

    this.userService.findUserById(this.userId).subscribe({
      next:(userResponse)=> {
        this.localStorageService.insertToken('LoggedUser', userResponse); //Salva um obj com os dados do usuário logado;
        this.fillResponsavelTecControl(userResponse.nome);
        console.log("UserResponse: " , userResponse);
      },
      error: (err)=> {
        console.log(err);
      },
    }).add(() => {
      this.loading = false;
    })
  }

  private fillResponsavelTecControl(nameTec: string){
    this.form.controls.responsavelTec.setValue(nameTec);
  }

  private createBusinessPayload(): BusinessCreate {
    const form = this.form.getRawValue();

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
      responsavelTec: this.businessCreate.responsavelTec,
      idBusiness: form.idBusiness
    };
  }

  private createBusiness(): void {
    //SALVA UMA EMPRESA
    this.businessService.create(this.createBusinessPayload()).subscribe({
      next: (res) => {
        this.notification.showMessageSucess('Sucesso! Empresa cadastrada');
        this.router.navigate(['business/list']);
       // console.log(res);
      },
      error: (err) => {
        this.notification.showMessageFail(
          'Ocorreu um erro ao salvar as informações de empresa.'
        );
        console.log(err);
      },
    });
  }

  private updateBusinessPayload(): BusinessCreate {
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
      responsavelTec: this.businessCreate.responsavelTec,
      telefone: form.telefone,
      uf: form.uf,
    };
  }

  private updateBusiness(): void {
    //ALTERA UMA EMPRESA
    this.businessService.update(this.updateBusinessPayload()).subscribe({
      next: (res) => {
        this.notification.showMessageSucess('Sucesso! Empresa alterada');
        this.router.navigate(['business/list']);
        //console.log(res);
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
    this.businessService.loadById(+this.id).subscribe({
        next: (business) => {
          //console.log('OBJETO DO BANCO:',business);
          this.businessResponse = business;
          console.log("this.businessResponse:" , this.businessResponse);
          this.fillForm(business);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  private fillForm(business: BusinessResponse): void{

    this.form.patchValue({
      nome: business.nome,
      cnpj: business.cnpj,
      cep: business.cep,
      logradouro: business.logradouro,
      compl: business.compl,
      bairro: business.bairro,
      cidade: business.cidade,
      uf: business.uf,
      telefone: business.telefone,
      plano: business.plano,
      representante: business.representante,
      responsavelTec: business.nomeUser
    });
  }

  // //Compara o valor retornado pela API com todas as opções do select quando ele encontrar a opção que é igual, seleciona no mat-select
  // protected compareOptions(selectPlan: string, savedPlan: string): boolean{
  //   return selectPlan === savedPlan;
  // }

  public onCancel(): void {
    this.router.navigate(['home']);
  }
}

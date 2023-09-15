import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Business } from 'src/app/core/models/business';
import { ViaCepService } from 'src/app/features/shared-module/services/cep';
import { BusinessService } from '../../services';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { AlertService } from 'src/app/features/shared-module/services/alert/alert.service';

@Component({
  selector: 'app-form-business',
  templateUrl: './form-business.component.html',
  styleUrls: ['./form-business.component.css'],
})
export class FormBusinessComponent implements OnInit {
  
  protected form = this.buildForm();
  protected business!: Business;
  protected submitted = false;
  protected msgSucess: string = '';
  protected msgError: string = '';

  constructor(private businessService: BusinessService,
              private viacepService: ViaCepService,
              private notificationService: NotificationService,
              private alertService: AlertService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    //this.buildForm();
    this.loadingById();
  }

  private buildForm(){
    // INICIA O FORMS VAZIO E FAZ A PRÉ VALIDAÇÃO
    return this.formBuilder.group({
      //idBusiness: [null],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.minLength(14)]],
      cep: ['', [Validators.required, Validators.minLength(8)]],
      telefone: [''],
      logradouro: ['', Validators.required, Validators.minLength(5)],
      compl: [''],
      cidade: ['',Validators.required, Validators.minLength(5)],
      bairro: ['', Validators.required, Validators.minLength(5)],
      uf: ['', Validators.required, Validators.minLength(2)],
      representante: ['', [Validators.required, Validators.minLength(5)]],
      plano: ['', [Validators.required]],
      responsavelTec: [{ idProfile: 1 }],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.submitted = true;

    if (this.form.invalid) {
      this.notificationService.showMessageFail('Preencha todos os campos corretamente!');
      return
    }
    if (this.form.value.idBusiness) { //Para atualizar informações
        this.msgSucess = 'Empresa atualizada com sucesso!';
        this.msgError = 'Ocorreu um erro ao atualizar as informações de empresa.';
        this.onCreateorUpdateBusiness(this.msgSucess, this.msgError);
        return

    }else{
      this.msgSucess = 'Sucesso! Empresa cadastrada';
      this.msgError = 'Ocorreu um erro ao salvar as informações de empresa.';
      this.onCreateorUpdateBusiness(this.msgSucess, this.msgError);
    }
  }
    
  protected validationCep() {
        //  VALIDA O CEP
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
        this.alertService.onError(' O CEP preenchido não é valido!');
      }
    }
  }

  private search(cep: string) {
    //FAZ A CHAMADA PARA API VIACEP E RETORNA OS DADOS
    this.viacepService.searchCep(cep).subscribe({
      next: (res: any) => {
        this.fillCepForms(res, this.form);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public fillCepForms(res: any, form: any) {
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

  public onCreateorUpdateBusiness(msg: string, msg2: string){
    //SALVA OU EDITA UMA EMPRESA
    this.businessService.save(this.form.value).subscribe({
      next: (res: any) => {
        this.notificationService.showMessageSucess(this.msgSucess);
        this.router.navigate(['business/list']);
        console.log(res);
      },
      error: (err: any) => {
        this.notificationService.showMessageFail(this.msgError);
        console.log(err);
      },
    });
  }

  public onUpdateBusiness(business: Business) {
    //PRENCHE O FORMS PARA EDIÇÃO
    console.log('Estou sendo chamado:',business);
    return this.form.patchValue(business);
  }

  private loadingById(){
    // FAZ A CHAMADA PARA O DATABASE, RETORNA UM OBJETO COM BASE NO ID DA URL
     this.route.params.pipe(
      map((params:any) => {
        return params['id']
      }),
      switchMap((id) => {
        return this.businessService.loadById(id);
      }))
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.onUpdateBusiness(res);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  public onCancel() {
    this.router.navigate(['home']);
  }
}

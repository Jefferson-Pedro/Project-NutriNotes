import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { CreateUser } from '../../models/CreateUser';
import { UserService } from '../../services/user';
import { EditUser } from '../../models/EditUser';
import { LocalStorageService } from 'src/app/features/shared-module/services/localStorage';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private route = inject(Router);
  private userService = inject(UserService);
  private notificationService = inject(NotificationService);
  private localStorageService = inject(LocalStorageService);

  protected form = this.buildForm();
  protected loading!: boolean;
  protected submitted = false;
  private user?: CreateUser;
 // private userLoggedin;

  constructor() {}

  ngOnInit(): void {
    this.loadUser();
  }

  public onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.invalid) {
      this.notificationService.showMessageFail(
        'Preencha todos os campos corretamente!'
      );
      return; //Quebra a função e não executa mais nada.
    }    
      this.editUser(); 
  }

  public onCancel() {
    this.route.navigate(['home']);
  }

  private buildForm() {
    return this.formBuilder.nonNullable.group({
      nome: ['', Validators.required],
      data_nasc: [null as Date | null, Validators.required],
      sexo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      crn: ['', Validators.required],
      senha: [''],
      novaSenha: ['']
    });
  }

  private updateUserPayload(): EditUser {
      //Armazena o valor cru do forms
    const formValue = this.form.getRawValue();
    return {
      idUser: this.user?.idUser,
      nome: formValue.nome,
      data_nasc: formValue.data_nasc,
      sexo: formValue.sexo,
      email: formValue.email,
      telefone: formValue.telefone,
      crn: formValue.crn,
      senha: formValue.senha,
      novaSenha: formValue.novaSenha
    };
  }

  private loadUser(): void {
    this.loading = true;
    //Criar a parte da autenticação
    this.localStorageService.loggedUser$.subscribe({
      next: (userResponse) => {
        const user = this.findByIdUser();
      }, 
      error: (err) => {
          console.log("Nenhum usuário logado: ", err);
      },
      });


    // criar no back end função que retorna profile se existir
    // criar função no serviço para consumir o endpoint
    //Se um usuário existir, chamar o fillform, passando o retorno da chamada como parametro;
    //No final da requisição, setar loading para false
  }
  // private findByIdUser(): CreateUser {
  //   this.
  // }

  //Preenche os campos do Profile
  private fillForm(user: EditUser): void {
    this.form.patchValue({
      nome: user.nome,
      data_nasc: user.data_nasc,
      email: user.email,
      sexo: user.sexo,
      telefone: user.telefone,
      crn: user.crn,
    });
  }

  private editUser(): void {
    const body = this.updateUserPayload();

    this.userService.update(body).subscribe({
      next: () => {
        this.notificationService.showMessageSucess(
          'Perfil atualizado com sucesso!'
        );
      },
      error: () => {
        this.notificationService.showMessageFail(
          'Ocorreu um erro ao alterar as informações do perfil'
        );
      },
      complete: () => {
        //quando completar requisição cai nessa função;
        this.loading = false;
      },
    });
  }

}

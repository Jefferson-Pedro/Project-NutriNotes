import { CreateUser } from './../../models/CreateUser';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
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
  private user!: EditUser;
 // private userLoggedin;

  ngOnInit(): void {
    this.loadUserById();
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
      //idUser: [0], // Inicializa com 0 ou qualquer outro número padrão
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
      idUser: this.user.idUser,
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

  //Recupera as informações do token e faz uma chamada para o back para verificar o id
  private loadUserById(): void {
    this.loading = true;
    const id = +this.localStorageService.getDecodeToken()!.id; //Uma forma de converter para Number
    this.userService.findUserById(id).subscribe({
      next:(userResponse)=> {
        this.localStorageService.insertToken('LoggedUser', userResponse); //Salva um obj com os dados do usuário logado;
        this.fillForm(userResponse);
      },
      error: (err)=> {
        console.log(err);
      },
    });
  }

  //Preenche os campos do Profile
  private fillForm(user: EditUser): void {
    this.form.patchValue({
      idUser: user.idUser,
      nome: user.nome,
      data_nasc: user.data_nasc,
      email: user.email,
      sexo: user.sexo,
      telefone: user.telefone,
      crn: user.crn,
    });
  }

  //Edita o perfil
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


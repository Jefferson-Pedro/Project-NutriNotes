import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { User } from 'src/app/core/models/Users';
import { LoginDTO } from 'src/app/core/models/LoginDTO';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { AuthDTO } from 'src/app/core/models/AuthDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public stepperOrientation: 'horizontal' | 'vertical' = 'horizontal';
  public isEditable = false;
  private formBuilder =  inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private notification = inject(NotificationService);
  protected formLogin = this.buildLoginForm();
  protected isLoading = false;

  private buildLoginForm() {
    return this.formBuilder.nonNullable.group({
      login: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  firstFormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
  });

  secondFormGroup = this.formBuilder.group({
    email: ['', Validators.required],
  });

  thirdFormGroup = this.formBuilder.group({
    data_nasc: ['', Validators.required],
  });

  roomFormGroup = this.formBuilder.group({
    crn: ['', Validators.required],
  });

  fifthFormGroup = this.formBuilder.group({
    sexo: ['', Validators.required],
  });

  sixthFormGroup = this.formBuilder.group({
    telefone: ['', Validators.required],
  });

  seventhFormGroup = this.formBuilder.group({
    senha: ['', Validators.required],
  });

  constructor() {}

  public createUserPayLoad(): User {

    const data_nasc = this.thirdFormGroup.get('data_nasc')?.value;
    if (!data_nasc) {
        throw new Error('Data de nascimento é obrigatória');
    }
    return {
      idUser: this.formLogin.get('idUser')?.value || undefined, 
      nome: this.firstFormGroup.get('nome')?.value || '',
      email: this.secondFormGroup.get('email')?.value || '',
      data_nasc: new Date(data_nasc),
      crn: this.roomFormGroup.get('crn')?.value || '',
      sexo: this.fifthFormGroup.get('sexo')?.value || '',
      telefone: this.sixthFormGroup.get('telefone')?.value || '',
      senha: this.seventhFormGroup.get('senha')?.value || '',
    }
  }

  public createLoginDto(): LoginDTO{
    const formValue = this.formLogin.getRawValue();
    return{
      login: formValue.login,
      password: formValue.senha
    }
  }

  public onSubmit() {
    const user: User = this.createUserPayLoad();
    this.authService.createUser(user).subscribe({
      next:(res) => {
        this.notification.showMessageSucess('Usuário criado com sucesso!');
        window.location.reload();
        console.log('Deu certo', res);
      },
      error:(err)=> {
        this.notification.showMessageFail('Aconteceu um erro!');
        console.log('Erro: ', err);
      },
    });
  }

  public loginUser() {

    if (this.formLogin.invalid) {
      this.notification.showMessageFail(
        'Preencha todos os campos corretamente!'
      );
      return;
    }  
    this.isLoading = true;
    const loginDto = this.createLoginDto();

    this.authService.loginValidation(loginDto).subscribe({
      next:(res: AuthDTO) =>{
        localStorage.setItem("NutriToken", res.token);
        this.notification.showMessageSucess('Login feito com sucesso!');
        this.router.navigate(['/home'])
        this.isLoading = false;
      },
      error:(err)=> {
        console.log(err);
        this.notification.showMessageFail('Usuário ou senha incorretos!');
        this.isLoading = false;
      },
    });
  }
}


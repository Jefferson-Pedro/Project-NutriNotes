import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { Login } from 'src/app/core/models/Login';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { LocalStorageService } from '../../../shared-module/services/localStorage';
import { LoginUserResponse } from 'src/app/core/models/LoginUserResponse';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  private formBuilder =  inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private notification = inject(NotificationService);
  private localStorageService = inject(LocalStorageService);
  protected formLogin = this.buildLoginForm();
  protected isLoading: boolean = false;

  private buildLoginForm() {
    return this.formBuilder.nonNullable.group({
      login: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  constructor() {}

  public createLogin(): Login{
    const formValue = this.formLogin.getRawValue();
    return{
      login: formValue.login,
      password: formValue.senha
    }
  }

  public verifyLogin(login: Login): void{
    this.authService.loginValidation(login).subscribe({
      next:(response: LoginUserResponse) =>{
          this.notification.showMessageSucess('Login feito com sucesso!');
          this.localStorageService.insertToken('NutriToken', response.token);
          this.router.navigate(['/home']);
      },
      error:(err)=> {
        console.log(err);
        const errorMesseger = err.error.message;
        this.notification.showMessageFail(errorMesseger);
      },
    }).add(() => this.isLoading = false);
  }

  public onSubmit() {
    if (this.formLogin.invalid) {
      this.notification.showMessageFail(
        'Preencha todos os campos corretamente!'
      );
      return;
    }
    this.isLoading = true;
    const login = this.createLogin();
    this.verifyLogin(login);
  }
}

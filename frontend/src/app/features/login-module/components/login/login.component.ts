import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { LoginDTO } from 'src/app/core/models/LoginDTO';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { AuthDTO } from 'src/app/core/models/AuthDTO';
import { Observable, delay } from 'rxjs';
import { LocalStorageService } from '../../services/localStorage';

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
  private isLoggedin!: boolean;

  private buildLoginForm() {
    return this.formBuilder.nonNullable.group({
      login: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  constructor() {}

  public createLoginDto(): LoginDTO{
    const formValue = this.formLogin.getRawValue();
    return{
      login: formValue.login,
      password: formValue.senha
    }
  }

  public managerToken(res: AuthDTO){
    this.isLoggedin = this.localStorageService.insertToken(res);
  }

  public verifyLoginDto(loginDto: LoginDTO): void{
    this.authService.loginValidation(loginDto).subscribe({
      next:(res: AuthDTO) =>{
        if(this.isLoggedin){
          this.notification.showMessageSucess('Login feito com sucesso!');
          this.router.navigate(['/home']);
        }
      },
      error:(err)=> {
        console.log(err);
        this.notification.showMessageFail('Usuário ou senha incorretos!');
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
    const loginDto = this.createLoginDto();
    this.verifyLoginDto(loginDto);
  }

}


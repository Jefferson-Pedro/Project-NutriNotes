import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { LoginDTO } from 'src/app/core/models/LoginDTO';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { AuthDTO } from 'src/app/core/models/AuthDTO';
import { LocalStorageService } from '../../../shared-module/services/localStorage';
import { jwtDecoder } from 'src/app/core/utils/nutriToken';

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

  public getLoggedInUserInfo():string | null{
    return this.localStorageService.getLoggedInUserInfo();
  }

  public saveLoggedInUserInfo(userInfo: AuthDTO){
    this.localStorageService.saveLoggedInUserInfo(userInfo);
  }

  public verifyLogin(loginDto: LoginDTO): void{
    this.authService.loginValidation(loginDto).subscribe({
      next:(userInfo: AuthDTO) =>{
          this.notification.showMessageSucess('Login feito com sucesso!');
          this.saveLoggedInUserInfo(userInfo);
          this.router.navigate(['/home']);
          //console.log(res);
      },
      error:(err)=> {
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
    const loginDto = this.createLoginDto();
    this.verifyLogin(loginDto);
  }
}
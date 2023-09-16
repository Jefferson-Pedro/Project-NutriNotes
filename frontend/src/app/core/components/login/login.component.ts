import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public stepperOrientation: 'horizontal' | 'vertical' = 'horizontal';
  public user: User | undefined;

  formLogin = this.formBuilder.group({
    login: ['', Validators.required],
    senha: ['', Validators.required],
  });

  firstFormGroup = this.formBuilder.group({
    email: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    senha: ['', Validators.required],
  });
  thirdFormGroup = this.formBuilder.group({
    crn: ['', Validators.required],
  });

  isEditable = false;

  constructor(
    private formBuilder: FormBuilder,
    private authUser: AuthService,
    private route: Router
  ) {}

  public onSubmit() {}

  public login() {
    const { login, senha } = this.formLogin.value;
    console.log(this.formLogin.value);
    if (typeof login === 'string' && typeof senha === 'string') {
      this.authUser.loginValidation(login, senha);
    }
  }
}

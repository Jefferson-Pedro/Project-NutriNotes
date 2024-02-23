import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { User } from '../../models/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  public stepperOrientation: 'horizontal' | 'vertical' = 'horizontal';
 // private user: User;
  private formBuilder = inject(FormBuilder);
  private authUser = inject(AuthService);
  private route = inject(Router);


  formLogin = this.formBuilder.group({
    login: ['', Validators.required],
    senha: ['', Validators.required],
  });

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

  isEditable = false;

  constructor() {}

  public onSubmit() {}

  public login() {
    const { login, senha } = this.formLogin.value;
    console.log(this.formLogin.value);
    if (typeof login === 'string' && typeof senha === 'string') {
      this.authUser.loginValidation(login, senha);
    }
  }
}

import { Component, HostListener, inject } from '@angular/core';
import { FormBuilder, FormGroup, MinValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs';
import { User } from 'src/app/core/models/Users';
import { UserService } from 'src/app/core/services/user';
import { NotificationService } from 'src/app/features/shared-module/services/notification';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private formBuilder = inject(FormBuilder);
  private route = inject(Router);
  private userService = inject(UserService);
  private notificationService = inject(NotificationService);

  protected register = this.buildForm();
  protected isLoading: boolean = false;
  protected submitted = false;

  constructor() {}

  private buildForm() {
    return this.formBuilder.nonNullable.group({
      idUser: [''],
      nome: ['', Validators.required],
      data_nasc: [null as Date | null, Validators.required],
      sexo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required, Validators.minLength(3) ],
      telefone: [''],
      crn: ['', Validators.required],
    });
  }

  private createUserPayload(): User {
    //Armazena o valor cru do forms
    const formValue = this.register.getRawValue();
    return {
      idUser: Number(formValue.idUser),
      nome: formValue.nome,
      data_nasc: formValue.data_nasc,
      sexo: formValue.sexo,
      email: formValue.email,
      senha: formValue.senha,
      telefone: formValue.telefone,
      crn: formValue.crn,
    };
  }

  public createUser(): void{
    const user: User = this.createUserPayload();

    this.userService.create(user).subscribe({
      next:(res) => {
        this.notificationService.showMessageSucess('Usuário criado com sucesso!');
        console.log('Deu certo', res);
      },
      error:(err)=> {
        this.notificationService.showMessageFail('Aconteceu um erro!');
        console.log('Erro: ', err);
      },
    }).add(() => this.isLoading = false);
  }

  public onCancel(){
    this.route.navigate(['/login']);
  }

  public onSubmit(){
    this.submitted = true;
    console.log(this.register.value);
    if (this.register.invalid) {
      this.notificationService.showMessageFail(
        'Preencha todos os campos corretamente!'
      );
      return; //Quebra a função e não executa mais nada.
    }
    this.createUser();
  }
}

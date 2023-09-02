import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile';
import { ViaCepService } from 'src/app/features/shared-module/services/cep';
import { NotificationService } from 'src/app/features/shared-module/services/notification';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder, 
              private route: Router, 
              private service: ProfileService, 
              private viacep:ViaCepService, 
              private notification: NotificationService ){

    this.form = this.formBuilder.group({
      nome: ['',Validators.required],
      data_nasc: [null, Validators.required],
      sexo: ['',Validators.required],
      email: ['',Validators.required],
      telefone: [''],
      crn: ['', Validators.required]
    });
  }

  public onSubmit(){
    console.log(this.form.value);
    this.service.create(this.form.value).subscribe({
      next: () => {
        this.notification.showMessageSucess('Perfil salvo com sucesso!');
      },
      error: (erro) => {
        this.notification.showMessageFail('Ocorreu um erro ao salvar as informações do perfil');
      }
    });    
  }

  public onCancel(){
    this.route.navigate(['home']);
  }
}

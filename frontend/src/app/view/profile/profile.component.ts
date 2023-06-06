import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private route: Router, private service: ProfileService ){
    this.form = this.formBuilder.group({
      nome: ['',Validators.required],
      data_nasc: [],
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
        this.service.showMessageSucess('Perfil salvo com sucesso!');
      },
      error: (erro) => {
        this.service.showMessageFail('Ocorreu um erro ao salvar as informações do perfil');
      }
    });    
  }

  public onCancel(){
    this.route.navigate(['']);
  }
}

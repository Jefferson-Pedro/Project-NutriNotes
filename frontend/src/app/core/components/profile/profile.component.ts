import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { Profile } from '../../models/profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  protected form = this.buildForm();
  protected loading!: boolean
  protected submitted = false;
  private profile?: Profile;
  
  constructor(private formBuilder: FormBuilder, 
              private route: Router, 
              private profileService: ProfileService, 
              private notificationService: NotificationService ){}


  ngOnInit(): void {
    this.loadProfile();
  }

  public onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.invalid){
      this.notificationService.showMessageFail('Preencha todos os campos corretamente!');
       return //Quebra a função e não executa mais nada.
    }

    if(this.profile){
      this.editProfile();
      return
    }
    this.createProfile(); 
  }

  public onCancel(){
    this.route.navigate(['home']);
  }

  private buildForm(){
   return this.formBuilder.nonNullable.group({
      nome: ['',Validators.required],
      data_nasc: [null as Date | null, Validators.required],
      sexo: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      telefone: [''],
      crn: ['', Validators.required]
    });
  }

  private createOrUpdateProfilePayload(): Profile{

    //Armazena o valor cru do forms
    const formValue = this.form.getRawValue();
    return {
      idProfile: this.profile?.idProfile,
      nome: formValue.nome,
      data_nasc: formValue.data_nasc,
      sexo: formValue.sexo,
      email: formValue.email,
      telefone: formValue.telefone,
      crn: formValue.crn
    } 
  }

  private createProfile():void{
    this.loading = true;
    const body = this.createOrUpdateProfilePayload();

    this.profileService.create(body).subscribe({
      next: () => {
        this.notificationService.showMessageSucess('Perfil salvo com sucesso!');
      },
      error: () => {
        this.notificationService.showMessageFail('Ocorreu um erro ao salvar as informações do perfil');
      },
      complete: () => { //quando completar requisição cai nessa função;
        this.loading = false;
      }
    });

  }

  private loadProfile():void{
    this.loading = true;
    //Criar a parte da autenticação
    // criar no back end função que retorna profile se existir
    // criar função no serviço para consumir o endpoint
    //Se um usuário existir, chamar o fillform, passando o retorno da chamada como parametro;
    //No final da requisição, setar loading para false
  }

  private fillForm(profile: Profile):void{
    this.form.patchValue({
      nome: profile.nome,
      data_nasc: profile.data_nasc,
      email: profile.email,
      sexo: profile.sexo,
      telefone: profile.telefone,
      crn: profile.crn
    });
  }

  private editProfile():void{
    const body = this.createOrUpdateProfilePayload();

    this.profileService.update(body).subscribe({
      next: () => {
        this.notificationService.showMessageSucess('Perfil atualizado com sucesso!');
      },
      error: () => {
        this.notificationService.showMessageFail('Ocorreu um erro ao alterar as informações do perfil');
      },
      complete: () => { //quando completar requisição cai nessa função;
        this.loading = false;
      }
    });    
  }
}

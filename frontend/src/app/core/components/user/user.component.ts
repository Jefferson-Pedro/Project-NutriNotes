import { User } from './../../models/User';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/features/shared-module/services/notification';
import { UserService } from '../../services/user';
import { EditUser } from '../../models/EditUser';
import { LocalStorageService } from 'src/app/features/shared-module/services/localStorage';
import { FilesService } from 'src/app/features/shared-module/services/files/files.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private route = inject(Router);
  private userService = inject(UserService);
  private notificationService = inject(NotificationService);
  private localStorageService = inject(LocalStorageService);
  private filesService = inject(FilesService);
  private sanitizer = inject(DomSanitizer);

  protected form = this.buildForm();
  protected loading!: boolean;
  protected submitted = false;
  protected user!: EditUser;
  private  id!: Number;
  protected defaultPhoto: string = '../../../../assets/img/perfil.png';
  protected userPhoto!: SafeUrl;

  ngOnInit(): void {
    this.loadUserById();
  }

  public onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.invalid) {
      this.notificationService.showMessageFail(
        'Preencha todos os campos corretamente!'
      );
      return; //Quebra a função e não executa mais nada.
    }
      this.editUser();
  }

  public onCancel() {
    this.route.navigate(['home']);
  }

  private buildForm() {
    return this.formBuilder.nonNullable.group({
      idUser: [0], // Inicializa com 0 ou qualquer outro número padrão
      nome: ['', Validators.required],
      data_nasc: [null as Date | null, Validators.required],
      sexo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      crn: ['', Validators.required],
      imageProfile: [''],
      senha: [''],
      novaSenha: ['']
    });
  }

   //Recupera as informações do token e faz uma chamada para o back para verificar o id
   private loadUserById(): void {

    this.loading = true;
    this.id = +this.localStorageService.getDecodeToken()!.id; //Uma forma de converter para Number

    this.userService.findUserById(this.id).subscribe({
      next:(userResponse)=> {
        this.localStorageService.insertToken('LoggedUser', userResponse); //Salva um obj com os dados do usuário logado;
        this.user = userResponse;
        console.log(this.user);
        console.log('Link Foto: ', this.user.imageProfile);
        this.downloadPhoto(this.user.imageProfile);
        this.fillForm(userResponse);
      },
      error: (err)=> {
        console.log(err);
      },
    }).add(() => {
      this.loading = false;
    })
  }

  private updateUserPayload(): EditUser {
      //Armazena o valor cru do forms
    const formValue = this.form.getRawValue();
    return {
      idUser: formValue.idUser, //this.user.idUser,
      nome: formValue.nome,
      data_nasc: formValue.data_nasc,
      sexo: formValue.sexo,
      email: formValue.email,
      telefone: formValue.telefone,
      crn: formValue.crn,
      imageProfile: formValue.imageProfile,
      senha: formValue.senha,
      novaSenha: formValue.novaSenha
    };
  }

  //Preenche os campos do Profile
  private fillForm(user: EditUser): void {
    this.form.patchValue({
      idUser: user.idUser,
      nome: user.nome,
      data_nasc: user.data_nasc,
      email: user.email,
      sexo: user.sexo,
      telefone: user.telefone,
      crn: user.crn,
      imageProfile: user.imageProfile
    });
  }

  //Edita o perfil
  private editUser(): void {
    this.loading = true;
    const body = this.updateUserPayload();
    console.log('Entrou no EditUser: ' , body);

    this.userService.update(body).subscribe({
      next: (response) => {
        console.log("Resposta do back para editar: " , response);
        this.notificationService.showMessageSucess(
          'Perfil atualizado com sucesso!'
        );
        location.reload();

      },
      error: (err) => {
        console.log(err);
        this.notificationService.showMessageFail(
          'Ocorreu um erro ao alterar as informações do perfil'
        );
      },
    }).add(() => {
      this.loading = false;
    })
  }

  //Faz o upload da foto de perfil
  public uploadPhoto(event: any){
    // console.log(event);
    const photo_user = event.target.files[0];
    const formdata = new FormData();
    formdata.append('file', photo_user);

    this.filesService.create(formdata, this.id).subscribe({
      next: (value) => {
        this.user.imageProfile = value;
        location.reload();
        this.notificationService.showMessageSucess(
          'Foto atualizada com sucesso!'
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public downloadPhoto(link_photo: string){
    this.filesService.getImage(link_photo).subscribe({
      next: (response) => {
        console.log('response: ' , response);
        //this.userPhoto = link_photo;
        this.userPhoto = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(response));
      },
      error: (err) => {
        console.log(err);
        this.userPhoto = this.defaultPhoto;
      },
    });
  }
}

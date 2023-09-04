import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Checklist } from 'src/app/core/models/checklist';

@Component({
  selector: 'app-monthly-documentation',
  templateUrl: './documentation-monthly.component.html',
  styleUrls: ['./documentation-monthly.component.css']
})
export class DocumentationMonthlyComponent {

  public checkList!: Checklist[];
  form: FormGroup;
  isEditing: boolean = false;
  defaultTitle: string = 'CheckList Mensal - Documentação';
  editedTitle: string = '';

  public displayedColumns = ['num', 'item', 'conforme', 'naoConforme','naoSeAplica', 'observacao'];

  constructor(private formBuilder: FormBuilder, 
              private router: Router){

      this.form = this.formBuilder.group({
      nomeEmpresa: ['',Validators.required],
      unidade: ['',Validators.required],
      gestor: ['',Validators.required],
      turno: [''],
      responsavelTec: [{ idProfile: 1 }],
      dataAuditoria: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  startEditing() {
    // Entra no modo de edição
    this.isEditing = true;
    this.editedTitle = this.defaultTitle;
  }

  stopEditing() {
    // Sai do modo de edição e atualiza o título
    this.isEditing = false;
    this.defaultTitle = this.editedTitle;
  }

  cancelEditing() {
    // Cancela a edição e volta para o título original
    this.isEditing = false;
    this.editedTitle = this.defaultTitle;
  }

  public onSave(){
    console.log(this.checkList.values);
  }

  public onCancel(){
    this.router.navigate(['home']);
  }
}

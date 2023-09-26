import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Checklist } from 'src/app/core/models/Checklist';

@Component({
  selector: 'documention-daily',
  templateUrl: './documentation-daily.component.html',
  styleUrls: ['./documentation-daily.component.css'],
})
export class DocumentationDailyComponent implements OnInit {
  public checkList!: Checklist[];

  public displayedColumns = [
    'num',
    'item',
    'conforme',
    'naoConforme',
    'naoSeAplica',
    'observacao',
  ];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      nomeEmpresa: ['', Validators.required],
      unidade: ['', Validators.required],
      gestor: ['', Validators.required],
      turno: [''],
      responsavelTec: [{ idProfile: 1 }],
      dataAuditoria: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  public onSave() {
    console.log(this.checkList.values);
  }

  public onCancel() {
    this.router.navigate(['home']);
  }
}
